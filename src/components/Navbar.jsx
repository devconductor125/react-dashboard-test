import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
	BuildingLibraryIcon,
	CurrencyDollarIcon,
	CreditCardIcon,
	QuestionMarkCircleIcon
} from "@heroicons/react/24/solid";
 
export default function Navbar() {
  return (
    <Card className="fixed top-4 left-4 h-[calc(100vh-2rem)] rounded-2xl bg-gray-900 w-full max-w-[20rem] p-4 ">
      <div className="mb-2 p-4 ">
        <Typography variant="h3" color="white" className="text-left">
				Banking<span className="text-green-600"> App</span> 
        </Typography>
      </div>
      <List className="mb-2 p-4  ">
        <ListItem className="text-white hover:bg-green-200 hover:text-black rounded py-3 px-3 align-center">
          <ListItemPrefix>
            <BuildingLibraryIcon className="h-5 w-5 mr-3" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem className="text-white hover:bg-green-200 hover:text-black rounded py-3 px-3 align-center">
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5 mr-3" />
          </ListItemPrefix>
          Transactions
        </ListItem>
        <ListItem className="text-white hover:bg-green-200 hover:text-black rounded py-3 px-3 align-center">
          <ListItemPrefix>
            <CurrencyDollarIcon className="h-5 w-5 mr-3" />
          </ListItemPrefix>
          Loans
        </ListItem>
        <ListItem className="text-white hover:bg-green-200 hover:text-black rounded py-3 px-3 align-center">
          <ListItemPrefix>
            <CreditCardIcon className="h-5 w-5 mr-3" />
          </ListItemPrefix>
          Cards
        </ListItem>
        <ListItem className="text-white hover:bg-green-200 hover:text-black rounded py-3 px-3 align-center">
          <ListItemPrefix>
            <QuestionMarkCircleIcon className="h-5 w-5 mr-3" />
          </ListItemPrefix>
          Supports
        </ListItem>
      </List>
    </Card>
  );
}
