// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 277:
case 4038:
case 2473:
case 1263:
case 3728:
case 1991:
case 1669:
case 2850:
case 35:
case 1533:
case 591:
case 2340:
case 1934:
case 263:
case 2149:
case 162:
case 3894:
case 1009:
case 1002:
case 760:
case 2601:
case 3799:
case 1288:
case 3376:
case 1760:
case 655:
case 754:
case 706:
case 2061:
case 2541:
case 3437:
case 900:
case 3510:
case 893:
case 3347:
case 1405:
case 2529:
case 2254:
case 1003:
case 4044:
case 2143:
case 2386:
case 2697:
case 256:
case 204:
case 2618:
case 3857:
case 1371:
case 1663:
case 2479:
case 3085:
case 3451:
case 1420:
case 2517:
case 3308:
case 2598:
case 712:
case 3195:
case 3483:
case 4067:
case 3793:
case 2201:
case 1688:
case 3996:
case 1907:
case 2522:
case 2434:
case 1424:
case 1636:
case 2956:
case 2781:
case 3575:
case 2178:
case 778:
case 245:
case 1888:
case 1399:
case 1973:
case 3169:
case 1080:
case 2491:
case 320:
case 2155:
case 3657:
case 1863:
case 3231:
case 672:
case 2250:
case 4040:
case 2897:
case 1711:
case 548:
case 3162:
case 1392:
case 579:
case 3041:
case 2338:
case 1328:
case 1979:
case 3163:
case 1862:
case 1046:
case 2448:
case 0:
case 2226:
case 2759:
case 1236:
case 138:
case 986:
case 3913:
case 3765:
case 3716:
case 3514:
case 75:
case 2407:
case 3694:
case 2752:
case 876:
case 434:
case 2854:
case 1695:
case 3631:
case 231:
case 4086:
case 1869:
case 2650:
case 1972:
case 1336:
case 3762:
case 3864:
case 612:
case 2589:
case 1512:
case 1865:
case 1293:
case 508:
case 1961:
case 620:
case 1816:
case 2267:
case 802:
case 3660:
case 3423:
case 2778:
case 1871:
case 3357:
case 709:
case 3025:
case 2153:
case 4054:
case 2582:
case 1958:
case 205:
case 1176:
case 24:
case 3573:
case 3769:
case 1024:
case 3847:
case 48:
case 1693:
case 3788:
case 660:
case 816:
case 2667:
case 3422:
case 168:
case 2984:
case 2551:
case 3876:
case 755:
case 891:
case 3498:
case 1147:
case 3417:
case 2504:
case 1164:
case 2706:
case 346:
case 929:
case 2903:
case 1228:
case 2840:
case 2238:
case 1914:
case 2644:
case 261:
case 194:
case 3165:
case 2048:
case 3331:
case 2568:
case 3429:
case 1395:
case 1108:
case 3089:
case 2977:
case 1160:
case 940:
case 65:
case 3199:
case 2742:
case 1271:
case 2640:
case 1910:
case 484:
case 1402:
case 233:
case 1535:
case 1409:
case 1056:
case 936:
case 2458:
case 576:
case 2980:
case 3736:
case 1265:
case 46:
case 4026:
case 355:
case 2838:
case 309:
case 989:
case 1892:
case 3970:
case 3932:
case 2397:
case 2030:
case 2072:
case 1020:
case 3193:
case 1363:
case 1671:
case 3987:
case 3860:
case 1665:
case 42:
case 2946:
case 848:
case 1616:
case 3004:
case 441:
case 1388:
case 879:
case 649:
case 557:
case 1005:
case 2145:
case 170:
case 828:
case 44:
case 224:
case 7:
case 4034:
case 2214:
case 405:
case 3822:
case 2658:
case 3476:
case 102:
case 629:
case 203:
case 3898:
case 421:
case 1725:
case 2001:
case 1356:
case 2999:
case 1846:
case 3829:
case 2373:
case 766:
case 1062:
case 1700:
case 3382:
case 3464:
case 2258:
case 1209:
case 4048:
case 669:
case 461:
case 868:
case 3383:
case 3146:
case 1129:
case 2372:
case 1320:
case 3351:
case 1543:
case 1063:
case 1471:
case 2261:
case 3823:
case 2993:
case 4007:
case 1122:
case 920:
case 2796:
case 2486:
case 651:
case 912:
case 1202:
case 1198:
case 1305:
case 3368:
case 2531:
case 1521:
case 3109:
case 1555:
case 949:
case 326:
case 1884:
case 2174:
case 2590:
case 538:
case 353:
case 1680:
case 3229:
case 3554:
case 89:
case 3222:
case 739:
case 284:
case 2391:
case 235:
case 1940:
case 3102:
case 2727:
case 980:
case 2713:
case 2916:
case 1646:
case 2861:
case 300:
case 786:
case 2444:
case 3705:
case 3223:
case 3103:
case 22:
case 2307:
case 3597:
case 1704:
case 4079:
case 2166:
case 1802:
case 1809:
case 3094:
case 3617:
case 4072:
case 4030:
case 3184:
case 3720:
case 3:
case 1986:
case 1277:
case 3622:
case 2348:
case 640:
case 2971:
case 95:
case 2875:
case 870:
case 1493:
case 797:
case 3868:
case 3804:
case 2127:
case 2511:
case 1137:
case 895:
case 2962:
case 1189:
case 3323:
case 653:
case 3457:
case 3851:
case 2576:
case 2872:
case 3955:
case 3883:
case 2691:
case 769:
case 1581:
case 1954:
case 2310:
case 292:
case 477:
case 1624:
case 1436:
case 4075:
case 2634:
case 2426:
case 3882:
case 3586:
case 3120:
case 3784:
case 1495:
case 822:
case 3329:
case 955:
case 2988:
case 1785:
case 810:
case 3494:
case 119:
case 225:
case 3398:
case 6:
case 404:
case 4014:
case 2234:
case 3837:
case 2648:
case 3322:
case 1918:
case 1104:
case 2766:
case 423:
case 2564:
case 1997:
case 2044:
case 3889:
case 3703:
case 3283:
case 3689:
case 3637:
case 3251:
case 1220:
case 2272:
case 2230:
case 4010:
case 2358:
case 1100:
case 2560:
case 697:
case 3942:
case 3011:
case 740:
case 1309:
case 1302:
case 2936:
case 142:
case 3780:
case 2454:
case 686:
case 3076:
case 1205:
case 1656:
case 1469:
case 736:
case 2673:
case 3538:
case 2361:
case 2135:
case 3490:
case 157:
case 930:
case 369:
case 2196:
case 2732:
case 2834:
case 431:
case 2086:
case 639:
case 1950:
case 3921:
case 2891:
case 3683:
case 789:
case 2995:
case 1798:
case 972:
case 1071:
case 3651:
case 2672:
case 532:
case 2630:
case 2679:
case 882:
case 1463:
case 59:
case 176:
case 3008:
case 1545:
case 1065:
case 3943:
case 3800:
case 1729:
case 3064:
case 2739:
case 1605:
case 158:
case 1227:
case 765:
case 3672:
case 3630:
case 1052:
case 1835:
case 3891:
case 2683:
case 334:
case 2825:
case 1931:
case 2289:
case 3995:
case 792:
case 3086:
case 650:
case 94:
case 2567:
case 3770:
case 1994:
case 1107:
case 269:
case 3196:
case 1315:
case 3834:
case 2544:
case 251:
case 2668:
case 3739:
case 1613:
case 2800:
case 4029:
case 1219:
case 68:
case 2604:
case 190:
case 3497:
case 2008:
case 1406:
case 73:
case 1059:
case 454:
case 2385:
case 899:
case 3401:
case 1612:
case 2942:
case 701:
case 1599:
case 603:
case 1374:
case 3040:
case 2777:
case 2637:
case 725:
case 624:
case 3230:
case 2283:
case 1957:
case 2204:
case 596:
case 412:
case 959:
case 1528:
case 837:
case 3135:
case 1191:
case 511:
case 3454:
case 2268:
case 115:
case 1213:
case 420:
case 4023:
case 3807:
case 2124:
case 343:
case 1896:
case 236:
case 3607:
case 917:
case 1819:
case 3988:
case 1339:
case 1421:
case 2329:
case 1172:
case 449:
case 1130:
case 2586:
case 2120:
case 1235:
case 3291:
case 2889:
case 2703:
case 1179:
case 981:
case 1370:
case 3044:
case 1443:
case 573:
case 1812:
case 2398:
case 2105:
case 325:
case 2317:
case 174:
case 2323:
case 2457:
case 1333:
case 2804:
case 3127:
case 3511:
case 2702:
case 3962:
case 1813:
case 3207:
case 66:
case 3112:
case 289:
case 3038:
case 2341:
case 3119:
case 635:
case 734:
case 3426:
case 3634:
case 107:
case 45:
case 365:
case 2156:
case 2978:
case 1635:
case 1173:
case 3691:
case 2883:
case 2709:
case 2625:
case 1990:
case 527:
case 3576:
case 3248:
case 785:
case 684:
case 3830:
case 1758:
case 2955:
case 1445:
case 3166:
case 4004:
case 2103:
case 200:
case 2705:
case 3444:
case 1908:
case 887:
case 1639:
case 513:
case 3713:
case 1687:
case 3971:
case 409:
case 601:
case 1588:
case 977:
case 1632:
case 1670:
case 2031:
case 2720:
case 2184:
case 724:
case 4083:
case 3858:
case 963:
case 4051:
case 1175:
case 2885:
case 2756:
case 2623:
case 2554:
case 78:
case 253:
case 1287:
case 3719:
case 2953:
case 226:
case 1976:
case 3590:
case 3438:
case 4082:
case 3026:
case 2109:
case 1569:
case 1562:
case 1042:
case 764:
case 665:
case 1911:
case 2641:
case 923:
case 692:
case 2217:
case 3391:
case 3814:
case 1232:
case 599:
case 1270:
case 2057:
case 446:
case 3372:
case 2351:
case 3018:
case 3139:
case 2383:
case 1006:
case 3614:
case 3810:
case 1748:
case 1274:
case 685:
case 3258:
case 239:
case 350:
case 3531:
case 2368:
case 38:
case 3486:
case 430:
case 1313:
case 76:
case 1707:
case 3796:
case 3132:
case 3170:
case 3261:
case 2685:
case 1452:
case 2823:
case 3993:
case 11:
case 3735:
case 303:
case 3928:
case 1312:
case 3054:
case 1674:
case 472:
case 3658:
case 4025:
case 983:
case 1832:
case 2526:
case 1327:
case 1453:
case 324:
case 3133:
case 3214:
case 4000:
case 3373:
case 2829:
case 2285:
case 1839:
case 873:
case 3440:
case 1319:
case 286:
case 1652:
case 604:
case 2193:
case 2485:
case 3318:
case 1167:
case 4:
case 1306:
case 2211:
case 992:
case 721:
case 2795:
case 2647:
case 3145:
case 2068:
case 2276:
case 1466:
case 196:
case 2664:
case 57:
case 400:
case 344:
case 2939:
case 1281:
case 1929:
case 3946:
case 1253:
case 3743:
case 3079:
case 2860:
case 1941:
case 333:
case 3286:
case 558:
case 3640:
case 663:
case 1378:
case 1252:
case 2199:
case 381:
case 1027:
case 677:
case 2089:
case 3977:
case 1355:
case 1681:
case 1923:
case 255:
case 2208:
case 2082:
case 2933:
case 1726:
case 1524:
case 3980:
case 2736:
case 1259:
case 3458:
case 2676:
case 1474:
case 1019:
case 1138:
case 2591:
case 3525:
case 2128:
case 1096:
case 2498:
case 3583:
case 1343:
case 1186:
case 2876:
case 943:
case 2572:
case 2530:
case 2422:
case 1853:
case 230:
case 1470:
case 2260:
case 3159:
case 439:
case 1487:
case 1321:
case 2116:
case 361:
case 1439:
case 3048:
case 2165:
case 1505:
case 3903:
case 2763:
case 2579:
case 1797:
case 3706:
case 781:
case 246:
case 127:
case 2915:
case 3267:
case 2000:
case 3537:
case 3902:
case 645:
case 1349:
case 3034:
case 1342:
case 2769:
case 4090:
case 3755:
case 3886:
case 2974:
case 305:
case 1245:
case 173:
case 2025:
case 3091:
case 3153:
case 3244:
case 574:
case 1433:
case 3181:
case 2357:
case 934:
case 2765:
case 1968:
case 2716:
case 254:
case 2514:
case 552:
case 1249:
case 3226:
case 3759:
case 2913:
case 1039:
case 1197:
case 547:
case 3367:
case 1087:
case 1503:
case 1855:
case 661:
case 2890:
case 4047:
case 2257:
case 2631:
case 1070:
case 763:
case 1983:
case 1032:
case 1621:
case 3344:
case 903:
case 1878:
case 1242:
case 3407:
case 383:
case 2694:
case 2017:
case 2360:
case 3155:
case 220:
case 2558:
case 1982:
case 1509:
case 2169:
case 4076:
case 3491:
case 98:
case 3178:
case 345:
case 30:
case 3753:
case 3434:
case 113:
case 1243:
case 756:
case 950:
case 3010:
case 137:
case 2400:
case 2294:
case 87:
case 3897:
case 3818:
case 429:
case 1502:
case 964:
case 1989:
case 2231:
case 1740:
case 723:
case 3697:
case 3014:
case 1255:
case 304:
case 356:
case 2404:
case 3745:
case 3618:
case 2290:
case 1546:
case 171:
case 1278:
case 2347:
case 2468:
case 3529:
case 3254:
case 1015:
case 2364:
case 1767:
case 3522:
case 249:
case 96:
case 3517:
case 3121:
case 1150:
case 70:
case 745:
case 278:
case 2085:
case 874:
case 2792:
case 363:
case 3149:
case 3924:
case 1126:
case 1678:
case 633:
case 1074:
case 3340:
case 2935:
case 1821:
case 25:
case 3850:
case 3297:
case 1655:
case 1206:
case 681:
case 3075:
case 377:
case 2690:
case 941:
case 1381:
case 2510:
case 1427:
case 807:
case 3541:
case 2437:
case 3061:
case 2376:
case 1900:
case 1843:
case 3142:
case 2799:
case 1412:
case 4060:
case 1531:
case 752:
case 3595:
case 2305:
case 2202:
case 1486:
case 2088:
case 1594:
case 468:
case 2880:
case 3707:
case 1796:
case 2122:
case 747:
case 1379:
case 3833:
case 2063:
case 1187:
case 563:
case 2320:
case 3459:
case 1614:
case 2465:
case 1275:
case 2416:
case 494:
case 216:
case 1258:
case 150:
case 3615:
case 428:
case 3887:
case 2700:
case 2542:
case 2062:
case 3839:
case 1373:
case 1661:
case 1999:
case 2846:
case 1440:
case 2602:
case 2284:
case 2141:
case 2725:
case 2203:
case 103:
case 2609:
case 3078:
case 1658:
case 3870:
case 3327:
case 2549:
case 1214:
case 3055:
case 4024:
case 3588:
case 2185:
case 1971:
case 2095:
case 2277:
case 3670:
case 1050:
case 279:
case 3021:
case 775:
case 674:
case 3730:
case 3874:
case 2986:
case 1210:
case 4020:
case 2783:
case 2809:
case 3947:
case 2704:
case 3396:
case 3964:
case 1307:
case 12:
case 3043:
case 3779:
case 3563:
case 3639:
case 141:
case 3908:
case 1861:
case 2646:
case 50:
case 4005:
case 1713:
case 3687:
case 470:
case 1727:
case 3866:
case 607:
case 1334:
case 3562:
case 3042:
case 1610:
case 2789:
case 3161:
case 3335:
case 1814:
case 184:
case 1391:
case 2499:
case 1712:
case 583:
case 2677:
case 3270:
case 3232:
case 3239:
case 833:
case 49:
case 3175:
case 488:
case 2680:
case 3287:
case 1590:
case 1174:
case 3976:
case 347:
case 881:
case 2555:
case 2782:
case 16:
case 3569:
case 3049:
case 2428:
case 3179:
case 1963:
case 54:
case 1291:
case 4003:
case 3332:
case 2997:
case 1044:
case 2104:
case 1766:
case 410:
case 1234:
case 1113:
case 3443:
case 3516:
case 521:
case 3714:
case 1508:
case 3045:
case 2168:
case 3565:
case 3812:
case 3696:
case 3819:
case 2856:
case 804:
case 2785:
case 1988:
case 2552:
case 2346:
case 1067:
case 4084:
case 1873:
case 3421:
case 2093:
case 2151:
case 3387:
case 3172:
case 715:
case 1426:
case 293:
case 3449:
case 2624:
case 2553:
case 758:
case 561:
case 165:
case 2581:
case 307:
case 2092:
case 495:
case 3173:
case 1969:
case 2820:
case 1248:
case 4002:
case 1879:
case 911:
case 863:
case 1962:
case 1511:
case 1207:
case 559:
case 996:
case 2805:
case 877:
case 1112:
case 647:
case 3761:
case 2256:
case 831:
case 3613:
case 1787:
case 517:
case 3406:
case 390:
case 1418:
case 2016:
case 1273:
case 1679:
case 3052:
case 707:
case 1672:
case 3227:
case 533:
case 482:
case 358:
case 1995:
case 1891:
case 2717:
case 1314:
case 3593:
case 3212:
case 2722:
case 1834:
case 967:
case 257:
case 37:
case 1361:
case 1673:
case 2469:
case 1279:
case 2125:
case 3528:
case 315:
case 2205:
case 544:
case 2656:
case 3478:
case 1454:
case 1733:
case 1807:
case 3619:
case 2926:
case 1936:
case 2302:
case 4077:
case 1401:
case 3612:
case 1560:
case 1040:
case 2100:
case 3374:
case 1358:
case 927:
case 1230:
case 1848:
case 774:
case 3957:
case 3710:
case 2688:
case 801:
case 696:
case 1201:
case 2084:
case 3150:
case 2316:
case 713:
case 611:
case 2420:
case 952:
case 419:
case 2262:
case 3359:
case 825:
case 2269:
case 1479:
case 737:
case 503:
case 2371:
case 1618:
case 2948:
case 156:
case 1697:
case 222:
case 3413:
case 2587:
case 1143:
case 3842:
case 687:
case 524:
case 3278:
case 914:
case 58:
case 3353:
case 1541:
case 3427:
case 2662:
case 865:
case 3900:
case 3843:
case 3577:
case 2760:
case 2288:
case 3580:
case 163:
case 3419:
case 1654:
case 1340:
case 1523:
case 1058:
case 4092:
case 2533:
case 3738:
case 2669:
case 3925:
case 1473:
case 2263:
case 1297:
case 4028:
case 3655:
case 3206:
case 3584:
case 3951:
case 2930:
case 2869:
case 3621:
case 1344:
case 1650:
case 3983:
case 535:
case 2695:
case 91:
case 1752:
case 3878:
case 1407:
case 3345:
case 1801:
case 2708:
case 2236:
case 476:
case 3643:
case 1759:
case 3249:
case 1448:
case 1367:
case 2764:
case 1106:
case 2862:
case 56:
case 337:
case 1010:
case 2392:
case 1897:
case 3806:
case 2711:
case 1250:
case 843:
case 673:
case 3033:
case 1155:
case 2190:
case 3435:
case 2080:
case 2888:
case 145:
case 1781:
case 2636:
case 2424:
case 3243:
case 313:
case 1753:
case 592:
case 3487:
case 88:
case 2513:
case 2108:
case 1568:
case 565:
case 2446:
case 898:
case 161:
case 3439:
case 699:
case 491:
case 1840:
case 327:
case 3645:
case 4063:
case 1504:
case 2147:
case 1007:
case 1551:
case 3432:
case 3853:
case 2299:
case 53:
case 1638:
case 2024:
case 637:
case 3342:
case 2628:
case 367:
case 2790:
case 501:
case 2519:
case 3035:
case 958:
case 2692:
case 373:
case 2871:
case 3754:
case 1181:
case 525:
case 2975:
case 1778:
case 3852:
case 803:
case 990:
case 2816:
case 2961:
case 796:
case 2865:
case 1589:
case 1326:
case 1537:
case 711:
case 2336:
case 270:
case 3415:
case 2005:
case 3013:
case 2403:
case 1946:
case 2899:
case 3144:
case 1414:
case 144:
case 1743:
case 1079:
case 543:
case 2671:
case 767:
case 3652:
case 1030:
case 3167:
case 82:
case 387:
case 479:
case 1686:
case 3917:
case 3750:
case 3998:
case 2216:
case 3923:
case 3681:
case 3259:
case 835:
case 2362:
case 1073:
case 1749:
case 3524:
case 3653:
case 3726:
case 3474:
case 117:
case 1458:
case 1525:
case 1301:
case 2535:
case 3138:
case 3012:
case 133:
case 1286:
case 3941:
case 3378:
case 2910:
case 2271:
case 1742:
case 585:
case 181:
case 3252:
case 1844:
case 2369:
case 2160:
case 1500:
case 3409:
case 1128:
case 2138:
case 2019:
case 39:
case 919:
case 2259:
case 1192:
case 447:
case 2653:
case 1933:
case 2923:
case 155:
case 4049:
case 4042:
case 569:
case 1089:
case 1390:
case 1199:
case 2252:
case 2378:
case 3910:
case 794:
case 1860:
case 2253:
case 3899:
case 1004:
case 728:
case 2929:
case 3665:
case 1939:
case 8:
case 2281:
case 414:
case 1664:
case 370:
case 1068:
case 1548:
case 1276:
case 109:
case 1795:
case 2998:
case 3731:
case 4021:
case 118:
case 993:
case 2306:
case 1507:
case 1970:
case 2167:
case 1083:
case 3363:
case 1051:
case 2652:
case 610:
case 2556:
case 3871:
case 2754:
case 3975:
case 1423:
case 886:
case 4078:
case 2245:
case 3176:
case 3790:
case 3958:
case 475:
case 1847:
case 1769:
case 1573:
case 3628:
case 1762:
case 1441:
case 328:
case 3336:
case 1000:
case 2140:
case 3816:
case 2701:
case 897:
case 1808:
case 3512:
case 3865:
case 770:
case 976:
case 1915:
case 146:
case 1394:
case 4006:
case 3228:
case 732:
case 1165:
case 1331:
case 1116:
case 2439:
case 394:
case 3914:
case 2487:
case 589:
case 3513:
case 839:
case 2985:
case 1171:
case 3693:
case 130:
case 957:
case 2853:
case 2520:
case 1876:
case 2343:
case 638:
case 1417:
case 2096:
case 1498:
case 2740:
case 1231:
case 722:
case 991:
case 2937:
case 5:
case 1162:
case 1927:
case 1400:
case 237:
case 710:
case 1912:
case 2642:
case 1041:
case 1561:
case 4081:
case 47:
case 2154:
case 4053:
case 3399:
case 2982:
case 120:
case 566:
case 3190:
case 1360:
case 458:
case 1694:
case 1017:
case 382:
case 2496:
case 4052:
case 2345:
case 2242:
case 1771:
case 902:
case 3869:
case 2032:
case 2070:
case 2983:
case 2584:
case 694:
case 795:
case 2855:
case 3930:
case 2503:
case 3393:
case 2087:
case 869:
case 3046:
case 3566:
case 160:
case 2197:
case 3764:
case 2118:
case 3862:
case 2643:
case 553:
case 2249:
case 4059:
case 1716:
case 154:
case 106:
case 2968:
case 668:
case 3708:
case 1799:
case 2577:
case 2353:
case 180:
case 1437:
case 2427:
case 1510:
case 3157:
case 1489:
case 1482:
case 3669:
case 3991:
case 1831:
case 2925:
case 3895:
case 2074:
case 3456:
case 3533:
case 2678:
case 362:
case 1894:
case 3009:
case 2126:
case 1136:
case 1792:
case 3934:
case 948:
case 1451:
case 3420:
case 1085:
case 3262:
case 1483:
case 3131:
case 3365:
case 1195:
case 149:
case 2767:
case 3570:
case 1996:
case 2015:
case 2842:
case 3405:
case 2066:
case 1468:
case 2278:
case 3587:
case 3003:
case 3948:
case 2606:
case 836:
case 2352:
case 1857:
case 474:
case 3663:
case 3371:
case 1780:
case 1124:
case 2619:
case 2896:
case 3926:
case 968:
case 2134:
case 2213:
case 3205:
case 1076:
case 1268:
case 2478:
case 2191:
case 27:
case 719:
case 3125:
case 2081:
case 357:
case 2455:
case 1204:
case 708:
case 413:
case 2710:
case 509:
case 3741:
case 437:
case 2627:
case 518:
case 1637:
case 1777:
case 3100:
case 2599:
case 820:
case 1011:
case 2059:
case 3545:
case 1008:
case 2406:
case 1282:
case 290:
case 3016:
case 4039:
case 2219:
case 3384:
case 2613:
case 1943:
case 555:
case 1668:
case 151:
case 3729:
case 1544:
case 1064:
case 3722:
case 169:
case 3824:
case 2994:
case 1047:
case 1567:
case 616:
case 860:
case 3488:
case 4070:
case 3303:
case 2931:
case 1289:
case 1683:
case 3717:
case 691:
case 1651:
case 3620:
case 258:
case 3071:
case 1237:
case 3182:
case 1851:
case 2990:
case 546:
case 3092:
case 1709:
case 1883:
case 4074:
case 2775:
case 207:
case 3028:
case 2449:
case 393:
case 3436:
case 189:
case 776:
case 1868:
case 2296:
case 970:
case 3380:
case 1457:
case 1323:
case 1540:
case 1317:
case 1398:
case 3168:
case 3224:
case 572:
case 2827:
case 3918:
case 2179:
case 1703:
case 1889:
case 849:
case 2235:
case 679:
case 3093:
case 3151:
case 1120:
case 2387:
case 1586:
case 2130:
case 1882:
case 2172:
case 3183:
case 3346:
case 742:
case 2421:
case 2339:
case 308:
case 99:
case 757:
case 319:
case 2696:
case 2819:
case 988:
case 136:
case 1494:
case 1200:
case 910:
case 2270:
case 1460:
case 2232:
case 3499:
case 3940:
case 3803:
case 3789:
case 1298:
case 791:
case 2049:
case 2569:
case 1109:
case 1300:
case 2976:
case 3884:
case 560:
case 3782:
case 1953:
case 3492:
case 3680:
case 153:
case 1981:
case 4019:
case 2239:
case 1623:
case 1229:
case 1885:
case 2175:
case 1698:
case 3783:
case 1094:
case 995:
case 2730:
case 348:
case 962:
case 1184:
case 3095:
case 702:
case 1031:
case 2670:
case 379:
case 2021:
case 2588:
case 512:
case 818:
case 3768:
case 2639:
case 2908:
case 1705:
case 1629:
case 100:
case 214:
case 3646:
case 1103:
case 2043:
case 411:
case 608:
case 1518:
case 3704:
case 1597:
case 2964:
case 1411:
case 578:
case 186:
case 938:
case 872:
case 2110:
case 2839:
case 3542:
case 1829:
case 1177:
case 549:
case 1389:
case 275:
case 1090:
case 3123:
case 1337:
case 1822:
case 2734:
case 467:
case 3549:
case 2078:
case 473:
case 2266:
case 3203:
case 1898:
case 2791:
case 1817:
case 2452:
case 846:
case 1823:
case 3471:
case 2833:
case 2707:
case 3202:
case 2313:
case 3684:
case 580:
case 1550:
case 3117:
case 3198:
case 1841:
case 139:
case 1464:
case 2748:
case 2615:
case 3209:
case 2006:
case 1408:
case 3944:
case 391:
case 1146:
case 3416:
case 3063:
case 3877:
case 2459:
case 427:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744952401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,];
var gg_b = "1744952401/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
