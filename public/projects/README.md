# Recent Projects photos

Drop real project photos here (e.g. project-1.jpg … project-6.jpg), then in
`src/components/RecentProjects.tsx` set the `image` field on each project:

    image: { src: "/projects/project-1.jpg", w: 1600, h: 1067 }

Any project with an `image` renders the photo; without one it shows the
branded placeholder tile. Use `w`/`h` = the photo's real pixel dimensions.
