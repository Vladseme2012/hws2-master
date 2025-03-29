import React, {useState} from 'react';
import moment from 'moment';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import {restoreState} from '../hw06/localStorage/localStorage';
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined);
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())));
    const [show, setShow] = useState<boolean>(false);

    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date());
        }, 1000);
        setTimerId(id);
    };

    const stop = () => {
        clearInterval(timerId);
        setTimerId(undefined);
    };

    const onMouseEnter = () => {
        setShow(true);
    };
    const onMouseLeave = () => {
        setShow(false);
    };

    // const stringTime = moment().format('hh:mm:ss') || <br/>;
    const stringTime = date.toLocaleTimeString('ru-RU') || <br/>;
    const stringDate = moment().format(`DD.MM.${date.getFullYear()}`) || <br/>;
    const stringDay = moment().format('dddd') || <br/>;
    const stringMonth = moment().format('MMMM') || <br/>;
    let isDisabled: boolean = Boolean(timerId);

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={isDisabled}
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!isDisabled}
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    );
}

export default Clock;
