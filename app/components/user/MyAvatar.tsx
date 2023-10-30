import Image from 'next/image';

const MyAvatar = async () => {
  const session = null as {
    user: {
      photoSrc: string;
      name: string;
      email: string;
    };
  } | null;

  if (!session) {
    return (
      <Image
        src={`https://api.dicebear.com/6.x/initials/svg?seed=WI&backgroundColor=82aa24,1ed81b,35e549,d7f41e,fbf300,15ff00,aedec1,03cee5,1e88e5,196b72,1a7e4c&backgroundType=gradientLinear&fontFamily=Courier%20New&fontSize=56&fontWeight=900`}
        width={40}
        height={40}
        alt={'Guest avatar'}
        className="h-8 w-8 rounded-full"
      />
    );
  }

  const me = session.user;

  return (
    <Image
      src={
        me.photoSrc ??
        `https://api.dicebear.com/6.x/initials/svg?seed=${me.email}&backgroundColor=82aa24,1ed81b,35e549,d7f41e,fbf300,15ff00,aedec1,03cee5,1e88e5,196b72,1a7e4c&backgroundType=gradientLinear&fontFamily=Courier%20New&fontSize=56&fontWeight=900`
      }
      width={40}
      priority
      height={40}
      alt={me.name ?? 'User avatar'}
      className="h-8 w-8 rounded-full"
    />
  );
};

export default MyAvatar;
