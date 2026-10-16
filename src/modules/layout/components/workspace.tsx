
"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import CreateWorkspace from "./create-workspace";

import {
  HiArrowPath,
  HiUser,
  HiPlus
} from "react-icons/hi2";

import { useWorkspaces } from "@/modules/workspace/hooks/workspace";
import { useWorkspaceStore } from "../store";
import { Separator } from "@/components/ui/separator";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WorkSpace = () => {
  const { data: workspaces, isLoading } = useWorkspaces();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { selectedWorkspace, setSelectedWorkspace } =
    useWorkspaceStore();

  useEffect(() => {
    if (workspaces?.length && !selectedWorkspace) {
      setSelectedWorkspace(workspaces[0]);
    }
  }, [workspaces, selectedWorkspace, setSelectedWorkspace]);

  if (isLoading) {
    return (
      <div className="flex h-9 items-center gap-2 rounded-lg border border-border bg-muted/30 px-3">
        <HiArrowPath className="size-4 animate-spin text-indigo-400" />
        <span className="text-xs text-muted-foreground">
          Loading workspace...
        </span>
      </div>
    );
  }

  if (!workspaces?.length) {
    return (
      <Button
        variant="outline"
        className="h-9 w-full justify-start gap-2 border-border bg-background text-muted-foreground"
        onClick={() => setIsModalOpen(true)}
      >
        <HiPlus className="size-4 text-indigo-400" />
        Create workspace
        <CreateWorkspace
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </Button>
    );
  }

  return (
    <>
      <Hint label="Switch workspace">
        <Select
          value={selectedWorkspace?.id ?? ""}
          onValueChange={(id) => {
            const workspace = workspaces.find((ws) => ws.id === id);
            if (workspace) setSelectedWorkspace(workspace);
          }}
        >
          <SelectTrigger
            className="
              !h-[35px] w-full min-w-0 gap-2 rounded-lg
              border border-border bg-card px-3
              text-foreground shadow-sm transition-colors
              hover:border-indigo-500/50 hover:bg-accent
              focus:ring-2 focus:ring-indigo-500/30
              [&>svg:last-child]:text-muted-foreground
            "
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-indigo-500/10">
              <HiUser className="size-3 text-indigo-400" />
            </span>

            <span className="min-w-0 flex-1 truncate text-left text-sm font-medium">
              {selectedWorkspace?.name ?? "Select workspace"}
            </span>
          </SelectTrigger>

          <SelectContent
        align="end"
              className="
                w-[300px] rounded-xl border border-zinc-200
    bg-white p-2 text-zinc-900 shadow-xl
    dark:border-zinc-800 dark:bg-zinc-950
    dark:text-zinc-100
  "
>

            <div className="px-2 py-2">
              <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                YOUR WORKSPACES
              </p>
            </div>

            {workspaces.map((ws) => (
              <SelectItem
                key={ws.id}
                value={ws.id}
                className="
                  cursor-pointer rounded-md py-2 pl-2 pr-8 text-sm
                  focus:bg-indigo-500/10 focus:text-foreground
                  data-[state=checked]:bg-indigo-500/10
                  data-[state=checked]:text-indigo-400
                "
              >
                <span className="flex items-center gap-2">
                  <HiUser className="size-4 shrink-0 text-muted-foreground" />
                  <span className="truncate">{ws.name}</span>
                </span>
              </SelectItem>
            ))}

            <Separator className="my-1.5 bg-border" />

            <div className="flex items-center justify-between gap-3 px-2 py-2">
              <div className="min-w-0">
                <p className="whitespace-nowrap text-sm font-medium text-foreground">
                  Manage workspaces
                </p>
                <p className="whitespace-nowrap text-xs text-muted-foreground">
                  Create a new workspace
                </p>
              </div>

              <Button
                type="button"
                size="icon"
                variant="ghost"
                aria-label="Create workspace"
                className="size-8 shrink-0 text-indigo-400 hover:bg-indigo-500/10"
                onClick={() => setIsModalOpen(true)}
              >
                <HiPlus className="size-4" />
              </Button>
            </div>
          </SelectContent>
        </Select>
      </Hint>

      <CreateWorkspace
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default WorkSpace;

