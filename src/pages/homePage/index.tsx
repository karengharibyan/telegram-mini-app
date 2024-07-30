import { type FC, useEffect, useMemo } from "react";
import {
  useInitData,
  useLaunchParams,
  useUtils,
  type User,
} from "@telegram-apps/sdk-react";
import { Button, Divider, List, Placeholder, Typography } from "@telegram-apps/telegram-ui";
import {
  DisplayDataRow,
  DisplayData,
} from "../../components/DisplayData/DisplayData";

import "./index.scss";

function getUserRows(user: User): DisplayDataRow[] {
  return [
    { title: "id", value: user.id.toString() },
    { title: "username", value: user.username },
    { title: "photo_url", value: user.photoUrl },
    { title: "last_name", value: user.lastName },
    { title: "first_name", value: user.firstName },
    { title: "is_premium", value: user.isPremium },
  ];
}

export const HomePage: FC = () => {
  const initData = useInitData();
  const utils = useUtils();

  const userRows = useMemo<DisplayDataRow[] | undefined>(() => {
    return initData && initData.user ? getUserRows(initData.user) : undefined;
  }, [initData]);

  const share = () => {
    utils.shareURL(
      `https://t.me/karens_telegram_app_bot/karens_test_app?startapp=${initData?.user?.id}`,
      "Try our App"
    );
  };

  useEffect(() => {
    console.log(initData);
  }, [initData]);

  if (!initData) {
    return (
      <Placeholder
        header="Oops"
        description="Application was launched with missing init data"
      >
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          style={{ display: 'block', width: '144px', height: '144px' }}
        />
      </Placeholder>
    );
  }

  return (
    <>
      <div className="share-block">
        <Button size="l" onClick={share}>
          Share App
        </Button>
      </div>
      <Divider />
      <List>
        {userRows && (
          <>
            {initData?.startParam && (
              <div className="refferer-block">
              <Typography> Referrer: {initData?.startParam}</Typography>
              </div>
            )}

            <DisplayData header={"User"} rows={userRows} />
          </>
        )}
      </List>
    </>
  );
};
