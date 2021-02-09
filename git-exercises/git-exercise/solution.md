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
