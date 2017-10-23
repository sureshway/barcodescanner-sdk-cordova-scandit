//------------------------------------------------------------------------------------------------//
//                        This file is part of the Scandit Parsing Library                        //
//                                                                                                //
//                   Copyright (c) 2016-2017 Scandit AG. All rights reserved                      //
//------------------------------------------------------------------------------------------------//

#import <Foundation/Foundation.h>

#import "SBSParserField.h"


@interface SBSParserResult : NSObject

@property (nonatomic, readonly, nonnull) NSString *jsonString;
@property (nonatomic, readonly, nonnull) NSDictionary<NSString *, SBSParserField *> *fieldsDict;
@property (nonatomic, readonly, nonnull) NSArray<SBSParserField *> *fieldsArray;

@end
