// GlobalContainers
import { Layout } from './GlobalContainers/Layout';
import { Header } from './GlobalContainers/Header';
import { Footer } from './GlobalContainers/Footer';
import { Modal } from './GlobalContainers/Modal';
import { DashboardWrapper } from './GlobalContainers/DashboardWrapper';
import { GoToBackLayout } from './GlobalContainers/GoToBackLayout';
import { ConfirmationLayout } from './GlobalContainers/ConfirmationLayout';

// HeaderContainers
import { NavBarLG } from './HeaderContainers/NavBarLG';
import { NavBarSM } from './HeaderContainers/NavBarSM';

// ChooseUsernameContainers
import { UsernameForm } from './ChooseUsernameContainers/UsernameForm';

// HomePageContainers
import { HeaderList } from './HomeContainers/HeaderList';
import { PetList } from './HomeContainers/PetList';
import { LoadingSkeletonHome } from './HomeContainers/LoadingSkeletonHome';

// CreatePetContainers
import { AddImagePet } from './CreatePetContainers/AddImagePet';
import { PetDataForm } from './CreatePetContainers/PetDataForm';
import { OwnerDataForm } from './CreatePetContainers/OwnerDataForm';
import { VaccinesDataForm } from './CreatePetContainers/VaccinesDataForm';
import { VaccinesInputs } from './CreatePetContainers/VaccinesInputs';

// UserViewContainers
import { UserInfoSection } from './UserViewContainers/UserInfoSection';
import { LoadingSkeletonUserView } from './UserViewContainers/LoadingSkeletonUserView';

// EditUserContainers
import { EditForm } from './EditUserContainers/EditForm';

// PetViewContainers
import { HeroSection } from './PetViewContainers/HeroSection';
import { VaccinesSection } from './PetViewContainers/VaccinesSection';
import { OwnerInfoSection } from './PetViewContainers/OwnerInfoSection';

// --------- Exported Objects ---------
// GlobalContainers
export {
  Header,
  Layout,
  Footer,
  Modal,
  DashboardWrapper,
  GoToBackLayout,
  ConfirmationLayout,
};
// HeaderContainers
export { NavBarLG, NavBarSM };
// ChooseUsernameContainers
export { UsernameForm };
// HomePageContainers
export { HeaderList, PetList, LoadingSkeletonHome };
// CreatePetContainers
export {
  AddImagePet,
  PetDataForm,
  OwnerDataForm,
  VaccinesDataForm,
  VaccinesInputs,
};
// UserViewContainers
export { UserInfoSection, LoadingSkeletonUserView };
// EditUserContainers
export { EditForm };
// PetViewContainers
export { HeroSection, VaccinesSection, OwnerInfoSection };
