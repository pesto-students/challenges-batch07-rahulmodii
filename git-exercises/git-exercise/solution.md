# Git Excercise insights

1. Create a simple commit, and then peek under the hood at the objects stored in our `.git` folder to gain insights into how things work.
    Insights
        a)data is stored in objects with Sha1 keys

2. Inspect the object with `git cat-file -t <commit id>` and `git cat-file -p <commit-id>`
    Insights
        `git cat-file -t <commit id>` able to see type eiter tree or blob
        `git cat-file -p <commit-id>` able to see files for commit

3. Use `git ls-files -s` to view the content of your staging area.
    Insights
        after using `git ls-files -s` able to see many files which are not visible in vscode staging but are there .

4. Use `git reset` to undo the staging of your file.
    Insights
        after using `git reset` all files which were shown Previously are not shown 

5. Stash your changes with a unique stash name, then unstash and apply them back.
    Insights
       used  `git stash push -m "my-stash"` to stash my files 
       used `git stash list` to list stash
       used `git stash pop stash@{0}` able to unstash
       used  `git stash apply stash@{0}` able to apply stash

6. Create a lightweight tag and confirm that its pointing to the right commit.
    Insights
        used `git tag v1.0` able to create tag
        used `git tag` was able to see tag 
        
7. Create an annotated tag, and use `git show` to see more information about it.
    Insights
        created annoted tag and was able to view using `git show` command
8. Merge 2 branches(ex. feature, and master) and look at the git logs.
9.  Make two conflicting changes to `sample.txt` in two different branches.
    Insights
        got commit id for merge date and author for the merge.

10. Use various options in git log to see the filtered history of repository.
    Insight 
        git log filter is quite useful able to retrive log by diffrent time and also first line

11.  Try Following command to see how Git is creating SHA Keys and storing values
```shell
$ echo 'Hello, World!' | git hash-object --stdin
```
```shell
$ echo 'blob 14\0Hello, World!' | openssl sha1
    Insights 
        Got same SHA keys from git and SHA1 direct command which explains how git creates keys.
11.  Try `git revert` to revert a commit.
    Insight 
        Pretty straight forward i was able to undo last commit got commit id from git log