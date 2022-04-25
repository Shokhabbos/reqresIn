import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/slices/users";
import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const [state,setState] = useState(false)
  const selector = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
    setState(!state)
  }, []);
  return (
    <div>
      <div className="users">
        {selector.loading ? (
          <h1>loading...</h1>
        ) : (
          selector.users.map((user) => (
            <Link to={`/user/${user.id}`} key={user.id}>
              <Card className="card" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={user.avatar}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {user.first_name + user.last_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    info about user
                  </Button>
                </CardActions>
              </Card>
            </Link>
          ))
        )}
      </div>
    
    </div>
  );
};

export default Home;
