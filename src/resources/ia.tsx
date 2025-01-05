type Page = {
    title: string;
    path: `/${string}`;
    children?: Page[];
};

const pages: Page[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Services",
        path: "/photographyservices",
        children: [
            {
                title: "Event Photography",
                path: "/photographyservices/eventphotography",
                children: [
                    { title: "Weddings", path: "/photographyservices/eventphotography/weddings" },
                    { title: "Corporate Events", path: "/photographyservices/eventphotography/corporateevents" },
                    { title: "Private Parties", path: "/photographyservices/eventphotography/privateparties" },
                    { title: "Custom Event Packages", path: "/photographyservices/eventphotography/customeventpackages" },
                ],
            },
            {
                title: "Portrait Photography",
                path: "/photographyservices/portraitphotography",
                children: [
                    { title: "Family Portraits", path: "/photographyservices/portraitphotography/familyportraits" },
                    { title: "Professional Headshots", path: "/photographyservices/portraitphotography/professionalheadshots" },
                    { title: "Personal Portraits", path: "/photographyservices/portraitphotography/personalportraits" },
                    { title: "Group Photography", path: "/photographyservices/portraitphotography/groupphotography" },
                ],
            },
            {
                title: "Film Development",
                path: "/photographyservices/filmdevelopment",
                children: [
                    { title: "35mm Film Development", path: "/photographyservices/filmdevelopment/35mmfilmdevelopment" },
                    { title: "Medium Format Development", path: "/photographyservices/filmdevelopment/mediumformatdevelopment" },
                    { title: "Black And White Film Development", path: "/photographyservices/filmdevelopment/blackandwhitefilmdevelopment" },
                ],
            },
            {
                title: "Digital Printing",
                path: "/photographyservices/digitalprinting",
                children: [
                    { title: "Standard Prints", path: "/photographyservices/digitalprinting/standardprints" },
                    { title: "Polaroid Style Prints", path: "/photographyservices/digitalprinting/polaroidstyleprints" },
                    { title: "Poster Sized Prints", path: "/photographyservices/digitalprinting/postersizedprints" },
                ],
            },
        ],
    },
    {
        title: "Shop",
        path: "/shop",
        children: [
            {
                title: "Cameras",
                path: "/shop/cameras",
                children: [
                    { title: "35mm Cameras", path: "/shop/cameras/35mmcameras" },
                    { title: "Medium Format Cameras", path: "/shop/cameras/mediumformatcameras" },
                    { title: "Digital Cameras", path: "/shop/cameras/digitalcameras" },
                    { title: "Disposable Cameras", path: "/shop/cameras/disposablecameras" },
                ],
            },
            {
                title: "Camera Accessories",
                path: "/shop/cameraaccessories",
                children: [
                    { title: "Camera Straps", path: "/shop/cameraaccessories/camerastraps" },
                    { title: "Camera Cases", path: "/shop/cameraaccessories/cameracases" },
                    { title: "Lens Filters", path: "/shop/cameraaccessories/lensfilters" },
                    { title: "Tripods", path: "/shop/cameraaccessories/tripods" },
                ],
            },
            {
                title: "Film And Supplies",
                path: "/shop/filmandsupplies",
                children: [
                    { title: "35mm Film Rolls", path: "/shop/filmandsupplies/35mmfilmrolls" },
                    { title: "Medium Format Film Rolls", path: "/shop/filmandsupplies/mediumformatfilmrolls" },
                    { title: "Film Storage", path: "/shop/filmandsupplies/filmstorage" },
                ],
            },
            {
                title: "Frames And Albums",
                path: "/shop/framesandalbums",
                children: [
                    { title: "Frames", path: "/shop/framesandalbums/frames" },
                    { title: "Albums", path: "/shop/framesandalbums/albums" },
                ],
            },
        ],
    },
    {
        title: "Portfolio",
        path: "/portfolio",
    },
    {
        title: "Blog",
        path: "/blog",
        children: [
            { title: "Analog", path: "/blog/analog" },
            { title: "Digital", path: "/blog/digital" },
        ],
    },
    {
        title: "Our story",
        path: "/about",
    },
];

export default pages;
export type { Page };