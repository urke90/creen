import Header from '../layout/Header';

interface IHomeProps {}

const Books: React.FC<IHomeProps> = () => {
    return (
        <div className="books">
            <div className="books-header">
                <Header title="Books" isEditAddPage />
            </div>
        </div>
    );
};

export default Books;
