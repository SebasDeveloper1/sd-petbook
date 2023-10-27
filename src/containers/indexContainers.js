// GlobalContainers
import { Layout } from './GlobalContainers/Layout';
import { NavBarLG } from './GlobalContainers/Header/NavBarLG';
import { NavBarSM } from './GlobalContainers/Header/NavBarSM';
import { Header } from './GlobalContainers/Header/Header';
import { HeaderNoLogin } from './GlobalContainers/Header/HeaderNoLogin';
import { Footer } from './GlobalContainers/Footer';
import { Modal } from './GlobalContainers/ModalComponents/Modal';
import { DashboardWrapper } from './GlobalContainers/DashboardWrapper/DashboardWrapper';
import { DashboardWrapperNoLogin } from './GlobalContainers/DashboardWrapper/DashboardWrapperNoLogin';
import { GoToBackLayout } from './GlobalContainers/ModalComponents/GoToBackLayout';
import { ConfirmationLayout } from './GlobalContainers/ModalComponents/ConfirmationLayout';
import { QrLayout } from './GlobalContainers/ModalComponents/QrLayout';

// ChooseUsernameContainers
import { CreateProfileForm } from './CreateProfileContainers/CreateProfileForm';
import { LoadingSkeletonCreateProfile } from './CreateProfileContainers/LoadingSkeletonCreateProfile';

// MainPageContainers
import { HeroMain } from './MainPageContainers/HeroMain';
import { AboutUsSection } from './MainPageContainers/AboutUsSection';
import { AuthorSection } from './MainPageContainers/AuthorSection';

// HomePageContainers
import { HeroHome } from './HomeContainers/HeroHome';
import { PetList } from './HomeContainers/PetList';
import { LoadingSkeletonHome } from './HomeContainers/LoadingSkeletonHome';

// CreatePetContainers
import { AddImagePet } from './CreatePetContainers/PetData/AddImagePet';
import { PetDataForm } from './CreatePetContainers/PetData/PetDataForm';
import { AddImageOwner } from './CreatePetContainers/OwnerData/AddImageOwner';
import { OwnerDataForm } from './CreatePetContainers/OwnerData/OwnerDataForm';
import { VaccinesDataForm } from './CreatePetContainers/VaccinesData/VaccinesDataForm';
import { VaccinesInputs } from './CreatePetContainers/VaccinesData/VaccinesInputs';
import { CreateForm } from './CreatePetContainers/CreateForm';
import { EditForm as EditPetForm } from './CreatePetContainers/EditForm';
import { LoadingSkeletonCreatePet } from './CreatePetContainers/LoadingSkeletonCreatePet';

// UserViewContainers
import { UserInfoSection } from './UserViewContainers/UserInfoSection';
import { LoadingSkeletonUserView } from './UserViewContainers/LoadingSkeletonUserView';

// EditUserContainers
import { EditForm } from './EditUserContainers/EditForm';
import { LoadingSkeletonEditForm } from './EditUserContainers/LoadingSkeletonEditForm';

// PetViewContainers
import { PetInfoSection } from './PetViewContainers/PetInfoSection';
import { PetDesc } from './PetViewContainers/PetDesc';
import { VaccinesSection } from './PetViewContainers/VaccinesSection';
import { OwnerInfoSection } from './PetViewContainers/OwnerInfoSection';
import { LoadingSkeletonPetView } from './PetViewContainers/LoadingSkeletonPetView';
import { VaccineDetails } from './PetViewContainers/VaccineDetails';
import { PetOptionsBanner } from './PetViewContainers/PetOptionsBanner';

// --------- Exported Objects ---------
// GlobalContainers
export {
  NavBarLG,
  NavBarSM,
  Header,
  HeaderNoLogin,
  Layout,
  Footer,
  Modal,
  DashboardWrapper,
  DashboardWrapperNoLogin,
  GoToBackLayout,
  ConfirmationLayout,
  QrLayout,
};

// ChooseUsernameContainers
export { CreateProfileForm, LoadingSkeletonCreateProfile };
// MainPageContainers
export { HeroMain, AboutUsSection, AuthorSection };
// HomePageContainers
export { HeroHome, PetList, LoadingSkeletonHome };
// CreatePetContainers
export {
  AddImagePet,
  PetDataForm,
  AddImageOwner,
  OwnerDataForm,
  VaccinesDataForm,
  VaccinesInputs,
  CreateForm,
  EditPetForm,
  LoadingSkeletonCreatePet,
};
// UserViewContainers
export { UserInfoSection, LoadingSkeletonUserView };
// EditUserContainers
export { EditForm, LoadingSkeletonEditForm };
// PetViewContainers
export {
  PetInfoSection,
  PetDesc,
  VaccinesSection,
  OwnerInfoSection,
  LoadingSkeletonPetView,
  VaccineDetails,
  PetOptionsBanner,
};
