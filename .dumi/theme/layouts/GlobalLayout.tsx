import { DarkContext } from '../../hooks/useDark';

const GlobalLayout: React.FC = () => {
  return (
    <DarkContext.Provider value={theme.includes('dark')}></DarkContext.Provider>
  );
};

export default GlobalLayout;
