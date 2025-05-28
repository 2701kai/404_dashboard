# 🧠 Speed Up GH Workflow With Aliasese

> _at least I´m trying to.._

```bash
# =================================================================================
#       ALIASES
# =================================================================================

# ---------------------------------------------------------------------------------
# WRAP: Push current branch, switch to main, merge it, push main | Alt + W
# ---------------------------------------------------------------------------------
wrap_merge_to_main() {
  current_branch=$(git symbolic-ref --short HEAD)
  if [ "$current_branch" = "main" ]; then
    echo "You're already on 'main'. Cannot wrap from main to main."
    return 1
  fi

  echo "🔁 Pushing current branch '$current_branch'..."
  git push || return 1

  echo "🔀 Switching to 'main'..."
  git checkout main || return 1

  echo "🔁 Merging '$current_branch' into 'main'..."
  git merge "$current_branch" || return 1

  echo "🚀 Pushing 'main' to origin..."
  git push || return 1

  echo "✅ Done! '$current_branch' has been merged into 'main' and pushed."
}
bind -x '"\ew":wrap_merge_to_main'


# ---------------------------------------------------------------------------------
# GAC: Alt+G = Pre-fill commit message | Alt + G
# ---------------------------------------------------------------------------------
git_add_commit_prefill() {
  READLINE_LINE="git add . && git commit -m ''"
  READLINE_POINT=28
}
bind -x '"\eg":git_add_commit_prefill'

# ---------------------------------------------------------------------------------
# GAC: Typed command `gac`
# ---------------------------------------------------------------------------------
gac() {
  git add .
  echo "Enter commit message:"
  read -r msg
  git commit -m "$msg"
}

# ---------------------------------------------------------------------------------
# GACP: Alt+V or type `gacp`| Alt + V
# ---------------------------------------------------------------------------------
gacp() {
  read -e -p "Commit message: " msg && git add . && git commit -m "$msg" && git push
}
bind -x '"\ev":gacp'

# ---------------------------------------------------------------------------------
# Git alias - git push - `gp`
# ---------------------------------------------------------------------------------
alias gp='git push'

# ---------------------------------------------------------------------------------
# GCMM: Merge current branch into `main` | # removed Alt + M
# ---------------------------------------------------------------------------------
gcmm() {
  current_branch=$(git symbolic-ref --short HEAD)

  if [ "$current_branch" = "main" ]; then
    echo "You're already on 'main'. Cannot merge 'main' into itself."
    return 1
  fi

  echo "Merging '$current_branch' into 'main'..."
  git checkout main && git merge "$current_branch"
}

# Alt + M to trigger
# bind -x '"\em":gcmm'

# ----------------------------------------------------------------------------------
# GB: Create a new branch and switch to it | Alt + B
# ---------------------------------------------------------------------------------
gb() {
  read -e -p "New branch name: " branch && git checkout -b "$branch"
}
bind -x '"\eb":gb'

# ---------------------------------------------------------------------------------
# GCM: Checkout to main branch | Alt + M
# ---------------------------------------------------------------------------------
gcm() {
  git checkout main
}
bind -x '"\em":gcm'

# ---------------------------------------------------------------------------------
# NRD: npm run dev | Alt + D
# ---------------------------------------------------------------------------------

# ---------------------------------------------------------------------------------
# VTD: execute script to create vite project w.tailwind/daisyUI
# ---------------------------------------------------------------------------------

# ---------------------------------------------------------------------------------
# GHRC: gh repo create --remote | Alt + R
# ---------------------------------------------------------------------------------
# execute gh repo create <name> --private --source=. --remote=origin --push
ghrc() {
  read -e -p "Repo Name: " msg && gh repo create "$msg" --private --source=. --remote=origin --push
}

bind -x '"\er":ghrc'

# =================================================================================
#       End ALIASES
# =================================================================================
```
