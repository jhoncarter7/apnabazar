
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
function SkeletonCard() {
  return (
    <div className="w-[65vw]  md:w-[42vw] lg:w-[18vw] shadow-md p-[2vw] rounded-lg">
      {<Skeleton variant="rectangular" width={210} height={118} />}
      {
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      }
      <div className="flex justify-between">
        <div>
          {<Skeleton width="60%" />}
          {<Skeleton width="60%" />}
        </div>

        {<Skeleton variant="rectangular" width={100} height={40} />}
      </div>
    </div>
  );
}

export default SkeletonCard;
