<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;

// created by risyandi.com - 2026

class TaskController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'date_deadline' => 'required|date_format:d/m/Y',
            'priority' => 'required|in:low,moderate,high',
        ]);

        $deadline = Carbon::createFromFormat('d/m/Y', $validated['date_deadline'])->format('Y-m-d');

        $task = $request->user()->tasks()->create([
            'title' => "{$request->user()->fullname} - {$validated['title']}",
            'description' => $validated['description'] ?? null,
            'date_deadline' => $deadline,
            'priority' => $validated['priority'],
        ]);

        return response()->json($task, 201);
    }

    public function index(Request $request)
    {
        $query = $request->user()->tasks();

        if ($request->has('priority')) {
            $query->where('priority', $request->priority);
        }

        if ($request->query('sort') === 'deadline') {
            $query->orderBy('date_deadline', 'asc');
        }

        $tasks = $query->get()->map(function ($task) {
            $urgentWords = ['mendesak', 'urgent'];
            $needAttention = false;
            
            foreach ($urgentWords as $word) {
                if (stripos($task->title, $word) !== false || stripos($task->description, $word) !== false) {
                    $needAttention = true;
                    break;
                }
            }
            
            $taskArray = $task->toArray();
            $taskArray['need_attention'] = $needAttention;
            return $taskArray;
        });

        return response()->json($tasks);
    }

    public function markAsCompleted(Request $request, $id)
    {
        $task = $request->user()->tasks()->findOrFail($id);
        $task->update(['is_completed' => true]);

        return response()->json($task);
    }

    public function reminder(Request $request)
    {
        $tomorrow = Carbon::tomorrow('Asia/Jakarta')->format('Y-m-d');
        
        $tasks = $request->user()->tasks()
            ->whereDate('date_deadline', $tomorrow)
            ->get();

        return response()->json($tasks);
    }
}
