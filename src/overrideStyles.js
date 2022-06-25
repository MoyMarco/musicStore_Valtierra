

const overrideStyles = ({
    logo: {
        color: '#ffffff',
        position: 'absolute'
    },
    white: {
        color: '#ffffff'
    },
    blue:{
        color: '#3dbeff'
    },
    bgGray: {
        backgroundColor:'#333333'
    },
    cartIcon: {
        color: '#ffffff',
        position: 'absolute',
        left: '96%'
    },
    cardCount: {
        width: '14em',
        backgroundColor: '#444',
        color: '#ffffff',
        margin: 'auto'
    },
    titleCardSize: {
        fontWeight: 'bold',
        fontSize: '1.08em',
        color: '#fff',
        marginBottom: '.5em'
    },
    subTitleCardSize: {
        fontSize: '1.05em',
        color: '#bbb',
        marginBottom: '.5em'
    },
    textCardSize: {
        fontSize: '.9em',
        color: '#fff',
        marginBottom: '.5em',
        textAlign: 'justify',
        padding: '1em'
    },
    cardItem: {
        position: 'relative',
        backgroundColor: '#222',
        color: '#ffffff',
        margin: 'auto',
        height: '30em',
        maxWidth: '30em',
        marginTop: '2em'
    },
    itemImage:{
        position: 'absolute',
        margin: 'auto',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0
    },
    itemDetailImage:{
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    itemImageDetails: {
        position: 'absolute',
        padding: '1em 0',
        margin: 'auto',
        backgroundColor: 'rgba(10, 10, 10, 0.7)',
        left: 0,
        bottom: 0,
        width: '100%'        
    },
    cardDetailItem: {
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: '35em',
        maxWidth: '35em',
    },
    cardDetailInformation: {
        position: 'relative',
        margin: 'auto',
        backgroundColor: 'rgba(10, 10, 10, 0.7)',
        color: '#ffffff',
        height: '40em',
        padding: '1em',
        maxWidth: '38em'
    },
    itemCountPosition: {
        position: 'relative',
        top: 70
    },
    loadingMessage: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        maxWidth: '50%',
        textAlign: 'center',
        color: '#bbb',
    },
    notFoundMessage: {
        fontSize: '2em',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        maxWidth: '50%',
        textAlign: 'center',
        color: '#333',
    },
    itemCart: {
        p: 2,
        margin: 'auto',
        flexGrow: 1,
        marginBottom: '2em',
        backgroundColor: 'rgba(10, 10, 10, 0.03)'
    },
    centerControlPrice: {
        position: 'relative',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%,-50%)' 
    },
    centerControlQuantity: {
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%,-50%)' 
    },
    rightControl: {
        position: 'relative',
        top: '50%',
        left: '100%',
        transform: 'translate(70%,-50%)' 
    }
    
  });

  export default overrideStyles;