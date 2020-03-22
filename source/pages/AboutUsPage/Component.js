// Core
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Hooks
import { useLocalStorage } from '../../hooks';

// Elements
import { Button } from '../../elements';

// Styles
import S from './styles';

// Images
import { images } from '../../assets';

const AboutUsPage = () => {
    const history = useHistory();
    const { t } = useTranslation();
    const [ isWelcomeComplete, setWelcomeState ] = useLocalStorage('isWelcomeComplete', false);

    const finishWelcomeProcess = () => {
        history.push('/');
        !isWelcomeComplete && setWelcomeState(true);
    };

    return (
        <S.AboutUsPageContainer>
            <Button
                styles = {{ margin: '10px 0px'}}
                onClick = { finishWelcomeProcess }>
                {
                    isWelcomeComplete ? t('AboutUsPage.back') : t('AboutUsPage.skip')
                }
            </Button>
            <S.Main>
                <S.Welcome>
                    {
                        isWelcomeComplete
                            ? <p>{t('AboutUsPage.aboutUs')}:</p>
                            : (
                                <>
                                    <p>{t('AboutUsPage.welcome')}</p>
                                    <p>{t('AboutUsPage.toStore')}.</p>
                                </>
                            )
                    }
                </S.Welcome>
                <S.Text>
                    <p><span>TJStore</span> {t('AboutUsPage.text1')}.</p>
                </S.Text>
                <S.Master>
                    <img src = { images.master }/>
                </S.Master>
                <S.Text>
                    <p>{t('AboutUsPage.myName')} <span>{t('AboutUsPage.olena')}</span> , {t('AboutUsPage.text2')}.</p>
                </S.Text>
                {/* <S.Master>
                    <img src = { images.master } />
                </S.Master> */}
                <S.Text>
                    <p>{t('AboutUsPage.text3')}.</p>
                </S.Text>
            </S.Main>
            <Button
                styles = {{ margin: '10px 0px', fontSize: '24px' }}
                onClick = { finishWelcomeProcess }>
                {
                    isWelcomeComplete ? t('AboutUsPage.back') : t('AboutUsPage.enter')
                }
            </Button>
        </S.AboutUsPageContainer>
    );
};

export default AboutUsPage;
