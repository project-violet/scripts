// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 1327:
case 2759:
case 1432:
case 791:
case 3122:
case 3540:
case 1829:
case 1734:
case 1360:
case 242:
case 644:
case 3522:
case 2637:
case 190:
case 3839:
case 2761:
case 3779:
case 3775:
case 2006:
case 1378:
case 1417:
case 3096:
case 1246:
case 1466:
case 2425:
case 3491:
case 3806:
case 651:
case 3087:
case 536:
case 1683:
case 1913:
case 1972:
case 186:
case 2075:
case 2958:
case 2687:
case 786:
case 1235:
case 2869:
case 2363:
case 1134:
case 3492:
case 790:
case 3776:
case 599:
case 3562:
case 494:
case 1825:
case 1980:
case 2882:
case 2026:
case 168:
case 1843:
case 3494:
case 3577:
case 2304:
case 3982:
case 3772:
case 3244:
case 2700:
case 2004:
case 1465:
case 3575:
case 2826:
case 78:
case 1286:
case 1955:
case 2479:
case 161:
case 701:
case 1616:
case 2772:
case 1730:
case 1715:
case 334:
case 3673:
case 2318:
case 2406:
case 2719:
case 565:
case 3211:
case 584:
case 3912:
case 3095:
case 3217:
case 2773:
case 3700:
case 3247:
case 977:
case 1375:
case 2001:
case 3058:
case 3024:
case 1321:
case 3287:
case 1009:
case 1604:
case 1746:
case 3816:
case 1946:
case 3367:
case 3032:
case 2344:
case 1051:
case 3674:
case 3533:
case 1367:
case 3134:
case 3573:
case 3155:
case 3350:
case 137:
case 207:
case 2074:
case 3506:
case 1784:
case 2483:
case 2839:
case 1588:
case 2815:
case 499:
case 2030:
case 521:
case 39:
case 3453:
case 3389:
case 524:
case 3699:
case 3725:
case 1793:
case 3607:
case 1131:
case 1029:
case 3868:
case 1698:
case 2140:
case 1786:
case 1680:
case 3961:
case 1356:
case 1697:
case 2846:
case 1978:
case 872:
case 1593:
case 650:
case 2254:
case 568:
case 2802:
case 1544:
case 1523:
case 2085:
case 3127:
case 2799:
case 3497:
case 2120:
case 402:
case 1070:
case 2099:
case 527:
case 406:
case 254:
case 411:
case 720:
case 2020:
case 1492:
case 3464:
case 978:
case 2900:
case 558:
case 555:
case 2334:
case 3539:
case 2855:
case 1301:
case 2650:
case 1084:
case 1694:
case 1328:
case 2970:
case 3477:
case 4043:
case 2553:
case 2106:
case 4001:
case 2841:
case 3825:
case 1194:
case 757:
case 1393:
case 1204:
case 3894:
case 576:
case 13:
case 4085:
case 1815:
case 842:
case 3045:
case 4048:
case 1312:
case 229:
case 619:
case 3137:
case 2040:
case 84:
case 2056:
case 3650:
case 3227:
case 3724:
case 3892:
case 1236:
case 1716:
case 277:
case 3004:
case 442:
case 3850:
case 1455:
case 3682:
case 2002:
case 0:
case 1273:
case 58:
case 3906:
case 1371:
case 1892:
case 1448:
case 2517:
case 2076:
case 3436:
case 2280:
case 2382:
case 2418:
case 3505:
case 2430:
case 4054:
case 2837:
case 3441:
case 2286:
case 252:
case 2191:
case 3890:
case 3001:
case 2528:
case 3399:
case 1107:
case 1632:
case 1007:
case 2638:
case 3857:
case 1336:
case 3201:
case 32:
case 2880:
case 2114:
case 730:
case 2281:
case 3366:
case 662:
case 3821:
case 3596:
case 3783:
case 1550:
case 1285:
case 2898:
case 2045:
case 3300:
case 2551:
case 2390:
case 1548:
case 112:
case 950:
case 1952:
case 638:
case 41:
case 2249:
case 54:
case 3879:
case 83:
case 1471:
case 1612:
case 1519:
case 1989:
case 3456:
case 3662:
case 434:
case 2399:
case 345:
case 2581:
case 2670:
case 3392:
case 3932:
case 1382:
case 2879:
case 914:
case 3844:
case 2562:
case 416:
case 2032:
case 1034:
case 3512:
case 3234:
case 1654:
case 1511:
case 1929:
case 3181:
case 2444:
case 351:
case 2658:
case 1778:
case 3100:
case 132:
case 610:
case 2620:
case 4032:
case 1401:
case 976:
case 3647:
case 1688:
case 3742:
case 804:
case 3864:
case 2829:
case 611:
case 803:
case 3804:
case 412:
case 380:
case 3035:
case 2192:
case 203:
case 3541:
case 3382:
case 341:
case 3325:
case 1650:
case 592:
case 497:
case 2429:
case 3715:
case 1342:
case 3566:
case 1256:
case 799:
case 2235:
case 691:
case 2207:
case 956:
case 1678:
case 2413:
case 3111:
case 234:
case 3717:
case 2979:
case 2014:
case 1033:
case 2393:
case 4038:
case 2921:
case 2164:
case 338:
case 924:
case 3916:
case 3953:
case 1905:
case 741:
case 4000:
case 2223:
case 972:
case 3236:
case 3398:
case 1421:
case 3999:
case 71:
case 3359:
case 915:
case 2055:
case 3216:
case 549:
case 2316:
case 1581:
case 1179:
case 3730:
case 1092:
case 2696:
case 1138:
case 55:
case 2968:
case 3509:
case 2358:
case 2523:
case 2278:
case 1493:
case 2795:
case 3777:
case 2569:
case 1720:
case 3259:
case 1473:
case 2952:
case 400:
case 3319:
case 2654:
case 2529:
case 1176:
case 1091:
case 2125:
case 1651:
case 215:
case 3302:
case 3037:
case 244:
case 1979:
case 3884:
case 624:
case 3067:
case 892:
case 1705:
case 1974:
case 2835:
case 2447:
case 1844:
case 1362:
case 3380:
case 4:
case 1198:
case 1879:
case 3626:
case 1159:
case 2090:
case 3178:
case 275:
case 3597:
case 3605:
case 375:
case 679:
case 4086:
case 2091:
case 1894:
case 1968:
case 4059:
case 1300:
case 2707:
case 2792:
case 2840:
case 2676:
case 460:
case 3718:
case 3182:
case 1648:
case 3403:
case 959:
case 1623:
case 681:
case 3140:
case 3351:
case 1565:
case 1110:
case 1494:
case 1255:
case 1017:
case 1857:
case 3866:
case 1814:
case 3018:
case 2131:
case 1707:
case 973:
case 1944:
case 1627:
case 1071:
case 793:
case 140:
case 435:
case 3487:
case 2217:
case 1118:
case 1959:
case 1172:
case 1888:
case 2365:
case 653:
case 79:
case 470:
case 781:
case 2431:
case 3213:
case 2969:
case 4062:
case 1201:
case 3997:
case 1568:
case 2603:
case 2126:
case 3036:
case 939:
case 169:
case 1747:
case 135:
case 3434:
case 1108:
case 2615:
case 2152:
case 3756:
case 633:
case 971:
case 726:
case 3005:
case 1779:
case 3365:
case 4075:
case 2098:
case 2411:
case 3861:
case 1845:
case 3203:
case 796:
case 910:
case 1407:
case 2794:
case 3257:
case 2679:
case 2311:
case 1661:
case 3872:
case 2060:
case 3153:
case 3135:
case 2750:
case 2657:
case 2261:
case 1191:
case 1821:
case 3826:
case 1146:
case 4088:
case 3817:
case 363:
case 3410:
case 439:
case 2234:
case 2662:
case 1572:
case 3960:
case 984:
case 1947:
case 256:
case 4005:
case 671:
case 2122:
case 355:
case 3370:
case 3546:
case 3458:
case 2725:
case 3531:
case 2774:
case 3378:
case 1589:
case 2545:
case 2656:
case 226:
case 3713:
case 951:
case 3933:
case 157:
case 1005:
case 2442:
case 1985:
case 3121:
case 3149:
case 3570:
case 758:
case 613:
case 18:
case 1637:
case 2693:
case 240:
case 3914:
case 150:
case 3210:
case 629:
case 382:
case 3192:
case 4079:
case 440:
case 3704:
case 1164:
case 3757:
case 2012:
case 1594:
case 3621:
case 1067:
case 3831:
case 2128:
case 42:
case 3253:
case 1291:
case 3268:
case 828:
case 3978:
case 1026:
case 1610:
case 3373:
case 3970:
case 3615:
case 2555:
case 2313:
case 1509:
case 4013:
case 1257:
case 3944:
case 3420:
case 3354:
case 2057:
case 3714:
case 618:
case 163:
case 1306:
case 405:
case 1709:
case 540:
case 1355:
case 2274:
case 2386:
case 3408:
case 3231:
case 2068:
case 937:
case 3511:
case 1916:
case 1018:
case 2606:
case 3198:
case 1903:
case 183:
case 2895:
case 1514:
case 3472:
case 1036:
case 384:
case 3613:
case 3071:
case 1802:
case 2289:
case 2960:
case 710:
case 3917:
case 3048:
case 3028:
case 3761:
case 3612:
case 2157:
case 25:
case 2218:
case 588:
case 1001:
case 47:
case 1801:
case 4074:
case 2930:
case 4066:
case 3793:
case 2953:
case 1344:
case 2036:
case 3734:
case 1374:
case 598:
case 2258:
case 466:
case 1753:
case 711:
case 3462:
case 3461:
case 891:
case 3785:
case 3353:
case 2438:
case 316:
case 2449:
case 159:
case 1606:
case 3110:
case 3905:
case 2458:
case 2065:
case 3077:
case 1388:
case 2798:
case 213:
case 3669:
case 3836:
case 318:
case 1207:
case 1813:
case 1319:
case 5:
case 889:
case 817:
case 933:
case 3390:
case 2472:
case 280:
case 922:
case 2588:
case 2117:
case 2848:
case 2944:
case 311:
case 3368:
case 960:
case 2478:
case 1920:
case 1545:
case 969:
case 1184:
case 236:
case 2466:
case 810:
case 1113:
case 2972:
case 2054:
case 2169:
case 3752:
case 3670:
case 3587:
case 130:
case 1987:
case 1703:
case 3910:
case 2728:
case 1082:
case 3560:
case 2897:
case 3133:
case 2305:
case 847:
case 2161:
case 2736:
case 1269:
case 445:
case 1919:
case 48:
case 1582:
case 422:
case 3855:
case 3363:
case 1152:
case 2256:
case 306:
case 2052:
case 3504:
case 1772:
case 2824:
case 1728:
case 639:
case 321:
case 3395:
case 1352:
case 1380:
case 15:
case 3141:
case 3578:
case 3618:
case 302:
case 331:
case 3278:
case 3834:
case 3536:
case 2162:
case 2765:
case 1880:
case 1058:
case 214:
case 929:
case 2894:
case 428:
case 896:
case 2267:
case 1258:
case 2501:
case 217:
case 1186:
case 3554:
case 2987:
case 485:
case 1574:
case 2716:
case 2241:
case 2558:
case 1781:
case 3245:
case 2224:
case 407:
case 2690:
case 348:
case 2475:
case 3643:
case 1496:
case 3516:
case 1794:
case 996:
case 1863:
case 2112:
case 1154:
case 3856:
case 29:
case 1433:
case 3686:
case 3703:
case 3006:
case 3191:
case 1485:
case 2998:
case 4037:
case 2732:
case 686:
case 2541:
case 2976:
case 626:
case 515:
case 448:
case 3226:
case 2424:
case 126:
case 3274:
case 1:
case 2029:
case 2675:
case 342:
case 3020:
case 808:
case 645:
case 119:
case 1663:
case 2534:
case 209:
case 1244:
case 3030:
case 1454:
case 3056:
case 196:
case 1050:
case 752:
case 2573:
case 2877:
case 3992:
case 2474:
case 1053:
case 2016:
case 3803:
case 98:
case 1874:
case 3105:
case 3463:
case 1354:
case 2954:
case 1416:
case 3074:
case 3419:
case 3465:
case 2727:
case 1852:
case 2005:
case 3148:
case 3617:
case 2618:
case 2194:
case 3814:
case 3829:
case 346:
case 2039:
case 1077:
case 3964:
case 101:
case 2017:
case 513:
case 2509:
case 2135:
case 2548:
case 3680:
case 89:
case 1982:
case 3954:
case 928:
case 1922:
case 3475:
case 1631:
case 113:
case 2360:
case 2357:
case 2433:
case 2116:
case 1710:
case 2763:
case 1615:
case 3971:
case 1868:
case 233:
case 487:
case 963:
case 1219:
case 344:
case 3206:
case 689:
case 3915:
case 2536:
case 2100:
case 349:
case 4092:
case 3797:
case 3063:
case 248:
case 1896:
case 3051:
case 975:
case 212:
case 2601:
case 3183:
case 2260:
case 1788:
case 3309:
case 3251:
case 1453:
case 1397:
case 2859:
case 2828:
case 738:
case 1898:
case 2387:
case 2263:
case 1399:
case 1316:
case 3501:
case 2160:
case 1078:
case 829:
case 2691:
case 2737:
case 2838:
case 1278:
case 2903:
case 3930:
case 1045:
case 124:
case 656:
case 2790:
case 88:
case 3969:
case 2943:
case 1797:
case 3708:
case 1846:
case 22:
case 1116:
case 2567:
case 1428:
case 2981:
case 151:
case 1250:
case 2046:
case 1268:
case 1193:
case 580:
case 1166:
case 2199:
case 663:
case 2295:
case 1140:
case 3409:
case 2185:
case 784:
case 3595:
case 59:
case 2322:
case 3393:
case 1830:
case 2153:
case 315:
case 3588:
case 2024:
case 768:
case 3553:
case 1298:
case 1271:
case 3189:
case 3104:
case 838:
case 102:
case 3130:
case 707:
case 3003:
case 1527:
case 2262:
case 452:
case 2927:
case 564:
case 3029:
case 777:
case 1949:
case 3620:
case 3490:
case 2437:
case 2511:
case 2527:
case 590:
case 317:
case 109:
case 2779:
case 3173:
case 258:
case 789:
case 1404:
case 2221:
case 2673:
case 1254:
case 912:
case 1469:
case 387:
case 1068:
case 2630:
case 3555:
case 557:
case 2172:
case 986:
case 2642:
case 2407:
case 1320:
case 1621:
case 204:
case 3722:
case 222:
case 38:
case 2611:
case 2364:
case 2394:
case 3693:
case 3015:
case 2908:
case 1442:
case 739:
case 3284:
case 3744:
case 3329:
case 3685:
case 1754:
case 1199:
case 3584:
case 1314:
case 1245:
case 2559:
case 3998:
case 3633:
case 500:
case 2149:
case 3427:
case 4082:
case 718:
case 1666:
case 3968:
case 3343:
case 197:
case 1226:
case 1503:
case 3258:
case 1743:
case 2158:
case 3483:
case 371:
case 3044:
case 1011:
case 1910:
case 3729:
case 1529:
case 1379:
case 3940:
case 1160:
case 3897:
case 2568:
case 2789:
case 2201:
case 3369:
case 2632:
case 3252:
case 1515:
case 354:
case 3913:
case 3824:
case 3152:
case 852:
case 2571:
case 2105:
case 2978:
case 732:
case 271:
case 356:
case 1592:
case 2575:
case 1064:
case 3014:
case 3602:
case 862:
case 1620:
case 1584:
case 2871:
case 1120:
case 3544:
case 2229:
case 1755:
case 1549:
case 3519:
case 3583:
case 2744:
case 735:
case 1056:
case 3956:
case 1883:
case 2905:
case 902:
case 3097:
case 3508:
case 419:
case 188:
case 913:
case 1723:
case 2950:
case 2174:
case 2741:
case 696:
case 3143:
case 908:
case 3101:
case 3299:
case 2924:
case 270:
case 2971:
case 3696:
case 3823:
case 652:
case 3664:
case 1700:
case 3990:
case 3976:
case 2391:
case 3760:
case 2561:
case 550:
case 762:
case 4010:
case 2154:
case 2920:
case 2396:
case 2525:
case 2347:
case 2912:
case 2288:
case 1921:
case 2592:
case 2928:
case 2243:
case 3558:
case 91:
case 3627:
case 3786:
case 251:
case 4024:
case 1218:
case 2080:
case 1571:
case 2994:
case 3616:
case 2909:
case 2574:
case 1586:
case 2397:
case 57:
case 2037:
case 2711:
case 1566:
case 1281:
case 1900:
case 3033:
case 3860:
case 1533:
case 1227:
case 2653:
case 967:
case 1928:
case 947:
case 880:
case 1866:
case 3743:
case 2314:
case 1480:
case 1141:
case 1461:
case 958:
case 3341:
case 484:
case 3099:
case 1951:
case 284:
case 3594:
case 1016:
case 2907:
case 982:
case 429:
case 2205:
case 596:
case 3637:
case 893:
case 2957:
case 2674:
case 3107:
case 755:
case 940:
case 602:
case 2337:
case 1518:
case 1583:
case 3547:
case 1858:
case 531:
case 2372:
case 1303:
case 1567:
case 2587:
case 2118:
case 3755:
case 2713:
case 1795:
case 2783:
case 1776:
case 1280:
case 2376:
case 115:
case 1655:
case 3405:
case 3672:
case 3871:
case 3349:
case 775:
case 2132:
case 3139:
case 3815:
case 2769:
case 3219:
case 3853:
case 2421:
case 2247:
case 1169:
case 1580:
case 1234:
case 794:
case 249:
case 3979:
case 1114:
case 2480:
case 2317:
case 1915:
case 424:
case 1963:
case 2412:
case 2692:
case 3054:
case 1569:
case 3347:
case 2786:
case 659:
case 3346:
case 1021:
case 116:
case 2797:
case 3818:
case 1083:
case 1055:
case 2787:
case 759:
case 620:
case 2565:
case 1187:
case 2785:
case 3778:
case 3503:
case 3733:
case 1279:
case 3564:
case 3925:
case 1562:
case 1463:
case 1538:
case 2209:
case 4068:
case 1954:
case 179:
case 1633:
case 216:
case 3863:
case 2977:
case 1277:
case 1570:
case 138:
case 276:
case 2156:
case 3623:
case 103:
case 1598:
case 697:
case 1737:
case 873:
case 2242:
case 3168:
case 1759:
case 1060:
case 2753:
case 3327:
case 2874:
case 1043:
case 404:
case 516:
case 3692:
case 559:
case 3668:
case 1658:
case 1489:
case 3923:
case 1505:
case 1484:
case 1363:
case 3194:
case 289:
case 268:
case 2914:
case 97:
case 1640:
case 2726:
case 3904:
case 2415:
case 3337:
case 2996:
case 432:
case 1967:
case 3202:
case 1504:
case 3639:
case 3272:
case 2022:
case 2516:
case 2206:
case 3046:
case 3833:
case 247:
case 2820:
case 905:
case 2701:
case 1085:
case 1603:
case 162:
case 3412:
case 3396:
case 3126:
case 2168:
case 4081:
case 2963:
case 2338:
case 1701:
case 2436:
case 703:
case 1884:
case 1047:
case 1317:
case 2688:
case 1961:
case 642:
case 2989:
case 3604:
case 3889:
case 1188:
case 2388:
case 2021:
case 495:
case 811:
case 2282:
case 3224:
case 220:
case 3545:
case 2361:
case 709:
case 3900:
case 4083:
case 481:
case 3414:
case 1806:
case 3996:
case 3180:
case 1443:
case 1353:
case 493:
case 3125:
case 3988:
case 3169:
case 3552:
case 2336:
case 3782:
case 952:
case 577:
case 1587:
case 2827:
case 1500:
case 1062:
case 3784:
case 623:
case 693:
case 3447:
case 2443:
case 1517:
case 682:
case 3576:
case 1906:
case 106:
case 2589:
case 239:
case 3963:
case 899:
case 4004:
case 2703:
case 1384:
case 1311:
case 175:
case 916:
case 1334:
case 241:
case 260:
case 1370:
case 2814:
case 2941:
case 2745:
case 2518:
case 2380:
case 563:
case 2350:
case 104:
case 2982:
case 1197:
case 2073:
case 3657:
case 2145:
case 3683:
case 3635:
case 1741:
case 3962:
case 3185:
case 4039:
case 1313:
case 3055:
case 535:
case 1423:
case 2476:
case 3747:
case 2776:
case 1914:
case 3439:
case 780:
case 988:
case 167:
case 376:
case 3218:
case 2651:
case 1769:
case 1177:
case 1564:
case 462:
case 3276:
case 2473:
case 373:
case 1424:
case 3160:
case 1856:
case 609:
case 1958:
case 128:
case 3870:
case 2864:
case 1840:
case 3951:
case 1158:
case 502:
case 476:
case 2088:
case 170:
case 1938:
case 171:
case 3468:
case 3394:
case 69:
case 1807:
case 3858:
case 2066:
case 95:
case 2756:
case 4023:
case 1144:
case 3432:
case 199:
case 3773:
case 2208:
case 1911:
case 2468:
case 2240:
case 491:
case 1429:
case 1826:
case 1962:
case 2550:
case 1897:
case 3771:
case 2310:
case 2800:
case 2636:
case 3515:
case 2193:
case 2964:
case 3313:
case 2850:
case 34:
case 2401:
case 2446:
case 1495:
case 1409:
case 3845:
case 1536:
case 2251:
case 3532:
case 1168:
case 3000:
case 823:
case 1738:
case 2806:
case 227:
case 4080:
case 1248:
case 2102:
case 3348:
case 870:
case 2196:
case 100:
case 1430:
case 3918:
case 1478:
case 1103:
case 4095:
case 2655:
case 3975:
case 3811:
case 1999:
case 1086:
case 3013:
case 946:
case 556:
case 1872:
case 3830:
case 856:
case 1467:
case 1490:
case 447:
case 860:
case 2612:
case 3328:
case 2025:
case 3764:
case 1497:
case 760:
case 28:
case 1652:
case 2535:
case 3645:
case 2059:
case 3568:
case 2324:
case 1385:
case 561:
case 1350:
case 2213:
case 1542:
case 3315:
case 403:
case 3172:
case 2778:
case 1935:
case 3372:
case 993:
case 3466:
case 3802:
case 2273:
case 118:
case 1049:
case 3994:
case 1521:
case 2110:
case 2300:
case 3671:
case 3025:
case 1439:
case 3282:
case 2027:
case 2770:
case 1054:
case 2938:
case 2937:
case 457:
case 3455:
case 685:
case 1870:
case 957:
case 1855:
case 1757:
case 514:
case 2108:
case 2332:
case 1325:
case 3754:
case 3421:
case 2823:
case 1293:
case 3225:
case 1447:
case 622:
case 1348:
case 819:
case 2607:
case 3326:
case 173:
case 3265:
case 571:
case 625:
case 932:
case 3810:
case 2109:
case 1396:
case 3212:
case 2069:
case 1106:
case 2133:
case 2564:
case 1061:
case 3352:
case 2598:
case 3442:
case 2939:
case 539:
case 3190:
case 2714:
case 4089:
case 2225:
case 261:
case 995:
case 1383:
case 2465:
case 441:
case 1240:
case 1491:
case 1178:
case 992:
case 2515:
case 1458:
case 2491:
case 1909:
case 3735:
case 1238:
case 2009:
case 2645:
case 3239:
case 3428:
case 700:
case 3723:
case 2906:
case 74:
case 2590:
case 769:
case 2271:
case 3840:
case 3204:
case 3698:
case 4094:
case 388:
case 621:
case 670:
case 845:
case 3648:
case 314:
case 396:
case 1290:
case 1346:
case 2661:
case 1867:
case 3335:
case 3068:
case 358:
case 2071:
case 4029:
case 3166:
case 3891:
case 3243:
case 3435:
case 3059:
case 605:
case 545:
case 2285:
case 824:
case 3937:
case 1925:
case 3170:
case 1057:
case 1975:
case 2856:
case 1991:
case 3809:
case 1724:
case 483:
case 1510:
case 2448:
case 3780:
case 1647:
case 1331:
case 2493:
case 1081:
case 2818:
case 1984:
case 3636:
case 3694:
case 2563:
case 2767:
case 3908:
case 1943:
case 3721:
case 257:
case 1540:
case 2857:
case 3888:
case 2917:
case 3184:
case 1761:
case 2537:
case 2457:
case 2667:
case 2623:
case 820:
case 401:
case 3980:
case 1147:
case 1074:
case 2507:
case 2984:
case 4050:
case 1862:
case 964:
case 1526:
case 2660:
case 1817:
case 237:
case 3371:
case 1307:
case 2228:
case 1022:
case 2186:
case 225:
case 1102:
case 1939:
case 2556:
case 1297:
case 1560:
case 927:
case 2810:
case 712:
case 50:
case 426:
case 1649:
case 85:
case 1182:
case 1185:
case 2484:
case 683:
case 10:
case 3848:
case 176:
case 3820:
case 779:
case 3571:
case 615:
case 826:
case 1406:
case 1997:
case 2195:
case 2326:
case 987:
case 2033:
case 3136:
case 834:
case 3342:
case 1066:
case 198:
case 1596:
case 61:
case 833:
case 361:
case 533:
case 3550:
case 1418:
case 2362:
case 296:
case 1296:
case 2530:
case 3867:
case 1232:
case 2496:
case 320:
case 997:
case 2370:
case 1052:
case 1641:
case 2721:
case 858:
case 1706:
case 3498:
case 1209:
case 2301:
case 2664:
case 456:
case 1966:
case 3609:
case 3794:
case 801:
case 2183:
case 4016:
case 2495:
case 281:
case 1507:
case 1464:
case 1253:
case 3789:
case 3062:
case 3907:
case 1414:
case 1400:
case 1136:
case 2735:
case 897:
case 1996:
case 3534:
case 1196:
case 1924:
case 1150:
case 3406:
case 2706:
case 2646:
case 1128:
case 1810:
case 3308:
case 840:
case 1266:
case 2560:
case 2554:
case 574:
case 158:
case 4076:
case 3572:
case 1329:
case 310:
case 507:
case 1722:
case 2175:
case 2875:
case 2203:
case 2710:
case 3094:
case 3746:
case 1189:
case 111:
case 3702:
case 942:
case 3233:
case 2141:
case 2379:
case 1689:
case 846:
case 372:
case 1617:
case 3079:
case 1079:
case 3507:
case 453:
case 65:
case 2414:
case 3431:
case 3556:
case 4021:
case 3298:
case 1027:
case 1932:
case 4067:
case 2739:
case 578:
case 2531:
case 6:
case 560:
case 2934:
case 360:
case 1990:
case 925:
case 1960:
case 1624:
case 3859:
case 2460:
case 3681:
case 36:
case 2521:
case 1323:
case 77:
case 1988:
case 573:
case 2353:
case 324:
case 2408:
case 123:
case 1608:
case 2749:
case 3118:
case 661:
case 1445:
case 627:
case 740:
case 2150:
case 526:
case 193:
case 2499:
case 2771:
case 2747:
case 3689:
case 3199:
case 1918:
case 1711:
case 2086:
case 3518:
case 3981:
case 593:
case 202:
case 857:
case 1094:
case 2246:
case 444:
case 1479:
case 3261:
case 543:
case 4015:
case 2849:
case 4073:
case 3799:
case 3340:
case 265:
case 1391:
case 2346:
case 2591:
case 3957:
case 3941:
case 2811:
case 2686:
case 1828:
case 1030:
case 3898:
case 1977:
case 3450:
case 2609:
case 3875:
case 3496:
case 843:
case 628:
case 1993:
case 603:
case 243:
case 3949:
case 3237:
case 76:
case 3039:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1689069601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,];
var gg_b = "1689069601/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
