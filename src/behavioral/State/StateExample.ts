import { log } from '../../utils/Logger';

export module StateExample {
    
    export const test = () => {
        const musicPlayer = new MusicPlayer();
        musicPlayer.play();
        musicPlayer.stop();
        musicPlayer.stop();
        musicPlayer.play();
        musicPlayer.pause();
    };

    interface MusicPlayerState {
        play(): void;
        stop(): void;
        pause(): void;
    }

    class PlayState implements MusicPlayerState {
        
        private _musicPlayer: MusicPlayer;

        constructor(musicPlayer: MusicPlayer){
            this._musicPlayer = musicPlayer;
        }

        play(): void{
            log('Already playing.');
        }

        stop(): void{
            log('Stop playing.');
            this._musicPlayer.state = new StopState(this._musicPlayer);
        }

        pause(): void {
            log('Pause playing.');
            this._musicPlayer.state = new PauseState(this._musicPlayer);
        }

    }

    class StopState implements MusicPlayerState {
        
        private _musicPlayer: MusicPlayer;

        constructor(musicPlayer: MusicPlayer){
            this._musicPlayer = musicPlayer;
        }

        play(): void{
            log('Play.');
            this._musicPlayer.state = new PlayState(this._musicPlayer);
        }

        stop(): void{
            log('Already stopped.');
        }

        pause(): void {
            log('Pause playing.');
            this._musicPlayer.state = new PauseState(this._musicPlayer);
        }

    }

    class PauseState implements MusicPlayerState {
        
        private _musicPlayer: MusicPlayer;

        constructor(musicPlayer: MusicPlayer){
            this._musicPlayer = musicPlayer;
        }

        play(): void{
            log('Play.');
            this._musicPlayer.state = new PlayState(this._musicPlayer);
        }

        stop(): void{
            log('Stop playing.');
            this._musicPlayer.state = new StopState(this._musicPlayer);
        }

        pause(): void {
            log('Already paused.');
        }

    }

    class MusicPlayer {

        public state: MusicPlayerState = new StopState(this);

        public play(): void {
            this.state.play();
        }
        
        public stop(): void {
            this.state.stop();
        }

        public pause(): void {
            this.state.pause();
        }

    }

}