export type RootStackParamList = {
    Login: any;
    Register: any;
    Splash: any;
    Main: any;
    TransparentModal: {
		content: React.ReactElement;
		bgColor?: string;
		fullScreen?: boolean;
	};
}