import { Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { theme } from './lib/styles/global.style';
import { arriveModal, certificateModal } from './recoil/atoms';
import { ArriveModal } from './view/modals';
import { ArrivePage } from './view/pages';

export function RoutesForBase() {
    const modal = useRecoilValue(arriveModal);
    const certificate = useRecoilValue(certificateModal);
    return (
        < ThemeProvider theme={theme} >
            {modal.open && !certificate && <ArriveModal />}
            <Routes>
                <Route path="/a/:serial" element={<ArrivePage />} />
            </Routes>
        </ ThemeProvider>
    );
}
