// GlobalContainers
import { Layout } from './GlobalContainers/Layout';
import { Header } from './GlobalContainers/Header';
import { HeaderNoLogin } from './GlobalContainers/HeaderNoLogin';
import { Footer } from './GlobalContainers/Footer';
import { Modal } from './GlobalContainers/Modal';
import { DashboardWrapper } from './GlobalContainers/DashboardWrapper';
import { DashboardWrapperNoLogin } from './GlobalContainers/DashboardWrapperNoLogin';
import { GoToBackLayout } from './GlobalContainers/GoToBackLayout';
import { ConfirmationLayout } from './GlobalContainers/ConfirmationLayout';
import { TextFieldGenerator } from './GlobalContainers/TextFieldGenerator';
import { QrLayout } from './GlobalContainers/QrLayout';

// HeaderContainers
import { NavBarLG } from './HeaderContainers/NavBarLG';
import { NavBarSM } from './HeaderContainers/NavBarSM';

// ChooseUsernameContainers
import { UsernameForm } from './ChooseUsernameContainers/UsernameForm';

// MainPageContainers
import { HeroMain } from './MainPageContainers/HeroMain';
import { AboutUsSection } from './MainPageContainers/AboutUsSection';
import { AuthorSection } from './MainPageContainers/AuthorSection';

// HomePageContainers
import { HeaderList } from './HomeContainers/HeaderList';
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
  Header,
  HeaderNoLogin,
  Layout,
  Footer,
  Modal,
  DashboardWrapper,
  DashboardWrapperNoLogin,
  GoToBackLayout,
  ConfirmationLayout,
  TextFieldGenerator,
  QrLayout,
};
// HeaderContainers
export { NavBarLG, NavBarSM };
// ChooseUsernameContainers
export { UsernameForm };
// MainPageContainers
export { HeroMain, AboutUsSection, AuthorSection };
// HomePageContainers
export { HeaderList, PetList, LoadingSkeletonHome };
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
