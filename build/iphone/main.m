//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <UIKit/UIKit.h>
#define _QUOTEME(x) #x
#define STRING(x) _QUOTEME(x)

NSString * const TI_APPLICATION_DEPLOYTYPE = @"test";
NSString * const TI_APPLICATION_ID = @"com.queenslibrary.QueensMemory";
NSString * const TI_APPLICATION_PUBLISHER = @"ITDUser2";
NSString * const TI_APPLICATION_URL = @"https://www.queenslibrary.org";
NSString * const TI_APPLICATION_NAME = @"Queens Memory";
NSString * const TI_APPLICATION_VERSION = @"1.0.1";
NSString * const TI_APPLICATION_DESCRIPTION = @"undefined";
NSString * const TI_APPLICATION_COPYRIGHT = @"2016 by Queens Library";
NSString * const TI_APPLICATION_GUID = @"39d1a795-f195-4006-9222-63749950503b";
BOOL const TI_APPLICATION_ANALYTICS = true;
BOOL const TI_APPLICATION_SHOW_ERROR_CONTROLLER = true;
NSString * const TI_APPLICATION_BUILD_TYPE = @"";

#ifdef TARGET_IPHONE_SIMULATOR
NSString * const TI_APPLICATION_RESOURCE_DIR = @"";
#endif

int main(int argc, char *argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

	int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");
    [pool release];
    return retVal;
}
