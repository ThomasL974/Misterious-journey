import { AiFillHome, AiFillTrophy, AiFillStar, AiFillHeart } from "react-icons/ai";
import { RiCompassDiscoverFill, RiDashboardFill, RiAccountPinCircleFill } from "react-icons/ri";
import { FaPlane } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

export const SidebarDataExternal = [
    {   
        title: 'Accueil',
        icon: <AiFillHome />,
        link: '/',
    },
    {
        title: 'Découvrir',
        icon: <RiCompassDiscoverFill />,
        link: '/discover',
    },
    {
        title: 'Classements',
        icon: <AiFillTrophy />,
        link: '/ranking',
    },
    {
        title: 'Les 4 éléments',
        icon: <RiDashboardFill />,
        link: '/ressources',
    },
]

export const SidebarDataInternal = [
    {
        title: 'Mes voyages',
        icon: <FaPlane />,
        link: '/travels',
    },
    {
        title: 'Favoris',
        icon: <AiFillStar />,
        link: '/travels/favourites'
    },
    {
        title: 'Aimé',
        icon: <AiFillHeart />,
        link: '/travels/liked'
    },
    {
        title: 'Tableau de bord',
        icon: <MdSpaceDashboard />,
        link: '/dashboard',
    },
    {
        title: 'Compte',
        icon: <RiAccountPinCircleFill />,
        link: '/account',
    }
]