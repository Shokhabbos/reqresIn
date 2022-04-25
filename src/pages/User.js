import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/slices/users";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
  
} from "@mui/material";


const Index = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.users);
  let params = useParams();
  useEffect(() => {
    dispatch(getUser(Number(params.id)));
    console.log(params.id);
  }, []);

  return (
    <div className="user">
      {selector.user_loading ? (
        <h1>Loading...</h1>
      ) : (
        <Card className="my-card" sx={{ minWidth: 500 }}>
          <CardActionArea className="my-card">
            <CardMedia
              component="img"
              height="200"
              width="500"
              className="card-img"
              image={selector.user.avatar}
              alt="green iguana"
            />
            <CardContent className="card-content">
              <Typography gutterBottom variant="h5" className="content" component="div">
                {selector.user.first_name + "" + selector.user.last_name}
              </Typography>
              <Typography variant="body2" className="content" >
                {selector.user.email}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};

export default Index;
