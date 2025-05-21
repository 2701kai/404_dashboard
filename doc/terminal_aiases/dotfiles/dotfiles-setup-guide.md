# Dotfiles Setup Guide

level-up with a portable **dotfiles setup** to sync across machines. Here's a tailored guide for **Ubuntu 25.04**, Bash-first environments, and your `.myaliases` file.

---

## ✅ Step 1: Create a Dotfiles Repo

```bash
mkdir -p ~/dotfiles
cd ~/dotfiles
git init
```

### Inside it, create:

```bash
touch .myaliases
```

Paste your shared block (the one you posted) into `~/.myaliases`:

```bash
# =================================================================================
#       ALIASES
# =================================================================================

# ---------------------------------------------------------------------------------
# GAC: Alt+G = Pre-fill commit message | Alt + G
# ---------------------------------------------------------------------------------
git_add_commit_prefill() {
    READLINE_LINE="git add . && git commit -m ''"
    READLINE_POINT=28
}
if [ -n "$BASH_VERSION" ]; then
    bind -x '"\eg":git_add_commit_prefill'
fi

# ---------------------------------------------------------------------------------
# GAC: Typed command gac
# ---------------------------------------------------------------------------------
gac() {
    git add .
    echo "Enter commit message:"
    read -r msg
    git commit -m "$msg"
}

# ---------------------------------------------------------------------------------
# GACP: Alt+V or type gacp | Alt + V
# ---------------------------------------------------------------------------------
gacp() {
    read -e -p "Commit message: " msg && git add . && git commit -m "$msg" && git push
}
if [ -n "$BASH_VERSION" ]; then
    bind -x '"\ev":gacp'
fi

# ---------------------------------------------------------------------------------
# Git alias - git push - gp
# ---------------------------------------------------------------------------------
alias gp='git push'

# ---------------------------------------------------------------------------------
# GCMM: Merge current branch into main
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
# Optional: bind -x '"\em":gcmm'

# ---------------------------------------------------------------------------------
# GB: Create and switch to new branch | Alt + B
# ---------------------------------------------------------------------------------
gb() {
    read -e -p "New branch name: " branch
    if [ -z "$branch" ]; then
        echo "Branch name cannot be empty."
        return 1
    fi
    git checkout -b "$branch" && echo "Switched to new branch: $branch"
}

# =================================================================================
#       End ALIASES
# =================================================================================
```

---

## ✅ Step 2: Modify `.bashrc` on every machine

Add this line to **the bottom of `~/.bashrc`**:

```bash
# Load portable custom aliases
[ -f ~/.myaliases ] && source ~/.myaliases
```

---

## ✅ Step 3: Link or Copy on Other Machines

You have two options:

### 🔗 Symlink (recommended for devs)

```bash
ln -s ~/dotfiles/.myaliases ~/.myaliases
```

Now `~/.myaliases` always points to the version in `~/dotfiles`.

### 📋 OR: Copy file on new machines

```bash
cp ~/dotfiles/.myaliases ~/.myaliases
```

---

## ✅ Step 4: Sync Dotfiles with GitHub

```bash
cd ~/dotfiles
git add .myaliases
git commit -m "Add portable Bash alias setup"
git remote add origin https://github.com/YOUR_USERNAME/dotfiles.git
git push -u origin main
```

---

## ✅ Step 5: On a New Machine

```bash
git clone https://github.com/YOUR_USERNAME/dotfiles.git ~/dotfiles
ln -s ~/dotfiles/.myaliases ~/.myaliases
echo '[ -f ~/.myaliases ] && source ~/.myaliases' >> ~/.bashrc
source ~/.bashrc
```

---

## 🧠 Bonus Tip (Optional)

To automate setup even more, add a bootstrap script like:

```bash
~/dotfiles/install.sh
```

```bash
#!/bin/bash
echo "Setting up dotfiles..."
ln -sf ~/dotfiles/.myaliases ~/.myaliases
grep -qxF '[ -f ~/.myaliases ] && source ~/.myaliases' ~/.bashrc || echo '[ -f ~/.myaliases ] && source ~/.myaliases' >> ~/.bashrc
echo "✅ .myaliases linked and loaded."
```

Run it with:

```bash
bash ~/dotfiles/install.sh
```

---
