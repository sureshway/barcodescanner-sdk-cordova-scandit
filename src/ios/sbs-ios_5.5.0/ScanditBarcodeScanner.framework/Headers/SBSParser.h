//------------------------------------------------------------------------------------------------//
//                        This file is part of the Scandit Parsing Library                        //
//                                                                                                //
//                   Copyright (c) 2016-2017 Scandit AG. All rights reserved                      //
//------------------------------------------------------------------------------------------------//

#import <Foundation/Foundation.h>

#import "SBSCommon.h"


SBS_ENUM_BEGIN(SBSParserError) {
    SBSParserErrorParser,
    SBSParserErrorInvalidDateObject,
    SBSParserErrorTwoDigitDateObject

} SBS_ENUM_END(SBSParserError);

@class SBSParserResult;

@interface SBSParser : NSObject

- (nullable SBSParserResult *)parseString:(nonnull NSString *)string
                                    error:(NSError * _Nullable * _Nullable)outError;
- (nullable SBSParserResult *)parseRawData:(nonnull NSData *)data
                                     error:(NSError * _Nullable * _Nullable)outError;

@end
