# 📁 Dotfiles Setup Guide

This repository contains a modular, portable dotfiles setup for quickly configuring your development environment across multiple machines.

## ✅ Includes

- `.bashrc` and `.zshrc` with minimal logic
- `.myaliases` shared across shells
- `.vimrc` with common sensible defaults
- `.gitconfig` for Git identity and shortcuts
- `install.sh` for quick setup on any new machine

---

## 📂 Folder Structure

```
~/dotfiles
├── .bashrc
├── .zshrc
├── .myaliases
├── .vimrc
├── .gitconfig
├── install.sh
└── README.md
```

---

## 🧩 Unified Alias File: `.myaliases`

Contains portable aliases and functions compatible with both Bash and Zsh. Includes:

- Git commit helpers (`gac`, `gacp`)
- Branch helpers (`gb`, `gcmm`)
- Keyboard bindings (Bash only)
- System and dev workflow shortcuts

---

## 🔧 Example `.bashrc` and `.zshrc`

Just source `.myaliases` from each shell config:

**`.bashrc`**

```bash
# ~/.bashrc
[ -f ~/dotfiles/.myaliases ] && source ~/dotfiles/.myaliases
```

**`.zshrc`**

```bash
# ~/.zshrc
[ -f ~/dotfiles/.myaliases ] && source ~/dotfiles/.myaliases
```

---

## 🎨 Example `.vimrc`

```vim
set number
syntax on
set tabstop=2 shiftwidth=2 expandtab
set mouse=a
```

---

## 🔧 Example `.gitconfig`

```ini
[user]
  name = Your Name
  email = you@example.com

[alias]
  co = checkout
  br = branch
  ci = commit
  st = status
```

---

## 🚀 Setup Script: `install.sh`

```bash
#!/bin/bash
echo "🔧 Setting up your dotfiles..."

DOTFILES_DIR=~/dotfiles

# Aliases
ln -sf $DOTFILES_DIR/.myaliases ~/.myaliases
grep -qxF '[ -f ~/.myaliases ] && source ~/.myaliases' ~/.bashrc || echo '[ -f ~/.myaliases ] && source ~/.myaliases' >> ~/.bashrc
grep -qxF '[ -f ~/.myaliases ] && source ~/.myaliases' ~/.zshrc || echo '[ -f ~/.myaliases ] && source ~/.myaliases' >> ~/.zshrc

# Other dotfiles
ln -sf $DOTFILES_DIR/.vimrc ~/.vimrc
ln -sf $DOTFILES_DIR/.gitconfig ~/.gitconfig
ln -sf $DOTFILES_DIR/.bashrc ~/.bashrc
ln -sf $DOTFILES_DIR/.zshrc ~/.zshrc

echo "✅ Dotfiles setup complete."
```

---

## 📦 Setup Instructions

### 🔄 Initial Setup

```bash
cd ~/dotfiles
git init
git remote add origin https://github.com/YOUR_USERNAME/dotfiles.git
git add .
git commit -m "Initial dotfiles setup"
git push -u origin main
```

### 💻 On a New Machine

```bash
git clone https://github.com/YOUR_USERNAME/dotfiles.git ~/dotfiles
bash ~/dotfiles/install.sh
```
