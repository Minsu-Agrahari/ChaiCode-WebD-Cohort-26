# Git And GitHub

```Git```:- Git is a software and a verson control system that allow you to track changes.

```GitHub```:- Github is a way to host that software online. Github is a ```server```

---

## Version Control System (VCS)

**VCS** are used to manage the history of your code.

## Terminolgy

| Statement | terminology / command              |
|----------|-------------------------------------|
| folder/directory| Repository/ Repo             |
|git version | git --version                     |
| file status | git status            |
|current working location | pwd (print working directory)|
|File tree | ls (list)                           |
| change directory | cd                          |

## Setup your email and username in the config file

```bash
git config --global user.email "<<your-user@email.com>>"

git config --global user.name "<<your name>>" 
```
## Check your config setting

```bash
git config --list
```

## Creating a repository
```bash
git status // check status
git init  // initizated .git
```

```git init``` command will create a new folder ```.git```. it will contains commit info.

---

## commit 

```bash
write => add => commit
```

```commit``` is a way to **save your changes** in repo.

```bash
git commit -m "<<commit message>>"
git status
```

---

## To track a particular file
```bash
git init 
git add <file1> <file2> <....>
git status
```

<hr style="border: none; border-top: 2px dotted #ccc;">

    * git add → Porcelain command (user-friendly interface to stage changes)
    * git commit → Porcelain command (creates a commit from staged changes)

    Note: Porcelain = high-level commands for users;
<hr style="border: none; border-top: 2px dotted #ccc;">

THE END...
---