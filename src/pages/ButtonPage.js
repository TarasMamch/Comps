import Button from "../components/Button"
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function ButtonPage() {

    return (
        <div>
            <div>
                <Button success rounded outline>
                    <GoBell />
                    Test 1
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloudDownload />
                    Test 2
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    Test 3
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Test 4
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Test 5
                </Button>
            </div>
        </div>
    )
}

export default ButtonPage;