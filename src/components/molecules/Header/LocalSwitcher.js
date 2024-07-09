import { useTranslations } from "next-intl";
import React, {
  useState,
  useRef,
  useEffect,
  useTransition,
  useCallback,
} from "react";
import styled, { keyframes } from "styled-components";
import { getImagePath } from "src/utils/imageUtils";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { getLocalizedPath } from "src/utils/routeUtils";
import useOutsideClick from "src/hooks/useOutsideClick";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Indicator = styled.div`
  position: absolute;
  top: -50%;
  width: 40px;
  height: 40px;
  background: var(--clr);
  border-radius: 50%;
  border: 6px solid var(--clr);
  transition: 0.5s;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: transparent;
    box-shadow: 0px -10px 0 0 var(--clr);
  }

  &::before {
    left: -22px;
    border-top-right-radius: 16px;
  }

  &::after {
    right: -22px;
    border-top-left-radius: 16px;
  }
`;

const FlagIcon = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${slideIn} 0.3s ease-out;
`;

const SwitcherNavigation = styled.div`
  position: relative;
  width: 100px;
  height: 45px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const DropdownButton = styled.span`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: end;
  justify-content: center;
  color: var(--clr);
  font-weight: 600;
  padding-bottom: 9px;
  font-size: 15px;
  gap: 5px;
`;

const SwitcherWrapper = styled.ul`
  position: absolute;
  top: 120%;
  width: auto;
  padding: 10px;
  margin-top: 15px;
  border-radius: 10px;
  background-color: #f8f8f8;
  font-size: 16px;
  list-style-type: none;
  margin: 0;
  z-index: 1;
  animation: ${fadeInDown} 0.3s ease-out;
  transform-origin: top center;
`;

const Item = styled.li`
  padding: 5px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  opacity: 0;
  animation: ${slideIn} 0.3s ease-out forwards;
  animation-delay: ${({ index }) => `${index * 0.05}s`};

  &:hover {
    background-color: #f0f0f0;
  }
`;

const LocalSwitcher = () => {
  const t = useTranslations();
  const languages = t.raw("languages");
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const initialLanguage = languages.find(
    (language) => language.locale === localActive
  );

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const [key, setKey] = useState(0);

  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    setKey((prevKey) => prevKey + 1);
  };

  const onSelectClick = (locale) => {
    startTransition(() => {
      const newPath = getLocalizedPath(pathname, locale);
      router.replace(newPath);
    });
  };

  const handleClickOutside = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOutsideClick(dropdownRef, handleClickOutside);

  return (
    <SwitcherNavigation ref={dropdownRef} onClick={toggleDropdown}>
      <DropdownButton>{selectedLanguage.language}</DropdownButton>
      {isOpen && (
        <SwitcherWrapper>
          {languages.map((item, index) => (
            <Item
              key={index}
              index={index}
              onClick={(e) => {
                e.stopPropagation();
                handleLanguageSelect(item);
                onSelectClick(item.locale);
              }}
              defaultValue={localActive}
              disabled={isPending}
            >
              {item.language}
            </Item>
          ))}
        </SwitcherWrapper>
      )}
      <Indicator>
        <FlagIcon
          key={key}
          src={getImagePath(selectedLanguage.icon)}
          alt={selectedLanguage.language}
          width={100}
          height={100}
        />
      </Indicator>
    </SwitcherNavigation>
  );
};

export default LocalSwitcher;
