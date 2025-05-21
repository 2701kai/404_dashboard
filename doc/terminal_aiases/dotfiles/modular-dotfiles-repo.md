# modular dotfiles repo

4handles:

- ✅ `.bashrc` and `.zshrc`
- ✅ `.myaliases` (shared)
- ✅ `.vimrc`
- ✅ `.gitconfig`
- ✅ Easy install on any new machine

---

## 🗂️ Final Folder Structure

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

## ✅ 1. Setup `.myaliases`

This is your **unified alias file** for Bash and Zsh. You already have it — just keep it here.

---

## ✅ 2. Create Clean `.bashrc` and `.zshrc`

Each one should just source `.myaliases`, and optionally some custom tweaks:

**`.bashrc`:**

```bash
# ~/.bashrc (portable)
[ -f ~/dotfiles/.myaliases ] && source ~/dotfiles/.myaliases
```

**`.zshrc`:**

```bash
# ~/.zshrc (portable)
[ -f ~/dotfiles/.myaliases ] && source ~/dotfiles/.myaliases
```

---

## ✅ 3. Example `.vimrc`

```vim
set number
syntax on
set tabstop=2 shiftwidth=2 expandtab
set mouse=a
```

---

## ✅ 4. Example `.gitconfig`

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

## ✅ 5. Install Script: `install.sh`

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

## ✅ 6. Initialize Git Repo

```bash
cd ~/dotfiles
git init
git remote add origin https://github.com/YOUR_USERNAME/dotfiles.git
git add .
git commit -m "Initial dotfiles setup"
git push -u origin main
```

---

## ✅ 7. Use on New Machines

```bash
git clone https://github.com/YOUR_USERNAME/dotfiles.git ~/dotfiles
bash ~/dotfiles/install.sh
```

---
