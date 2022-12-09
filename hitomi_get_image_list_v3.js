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
case 1338:
case 2118:
case 3408:
case 1702:
case 181:
case 262:
case 3146:
case 3071:
case 3383:
case 2990:
case 2493:
case 2899:
case 490:
case 1858:
case 1181:
case 1393:
case 184:
case 3569:
case 437:
case 411:
case 401:
case 739:
case 1115:
case 2506:
case 2880:
case 1047:
case 3988:
case 2107:
case 3068:
case 3215:
case 839:
case 2562:
case 1174:
case 1235:
case 3609:
case 985:
case 2365:
case 1784:
case 3752:
case 2228:
case 730:
case 3062:
case 2922:
case 1215:
case 54:
case 501:
case 3930:
case 872:
case 4035:
case 2231:
case 3013:
case 3580:
case 3646:
case 312:
case 3619:
case 1907:
case 3000:
case 2348:
case 109:
case 770:
case 3877:
case 332:
case 1037:
case 3083:
case 2630:
case 1946:
case 3471:
case 1497:
case 1495:
case 3378:
case 997:
case 2145:
case 4039:
case 931:
case 3556:
case 3902:
case 1769:
case 2003:
case 535:
case 498:
case 3211:
case 613:
case 1710:
case 2894:
case 2225:
case 3712:
case 729:
case 671:
case 776:
case 1436:
case 1846:
case 2658:
case 2015:
case 3867:
case 2612:
case 271:
case 3438:
case 2288:
case 2618:
case 3648:
case 3366:
case 3865:
case 2150:
case 3273:
case 3552:
case 888:
case 1882:
case 728:
case 830:
case 2684:
case 2258:
case 3369:
case 740:
case 3542:
case 863:
case 4043:
case 239:
case 3887:
case 1498:
case 1612:
case 2469:
case 1039:
case 2013:
case 1216:
case 3922:
case 1076:
case 2482:
case 3141:
case 416:
case 3488:
case 1444:
case 828:
case 2009:
case 1735:
case 3853:
case 3117:
case 1574:
case 3893:
case 275:
case 217:
case 1673:
case 2959:
case 4016:
case 638:
case 2011:
case 2942:
case 1814:
case 515:
case 2179:
case 984:
case 2888:
case 1386:
case 2988:
case 3737:
case 3970:
case 1375:
case 1582:
case 3445:
case 1788:
case 1358:
case 407:
case 2596:
case 3263:
case 3301:
case 3069:
case 2688:
case 2146:
case 3587:
case 2326:
case 2103:
case 1961:
case 113:
case 2451:
case 2571:
case 1748:
case 1362:
case 1467:
case 919:
case 1565:
case 1357:
case 2022:
case 960:
case 3063:
case 3841:
case 4024:
case 1512:
case 170:
case 1198:
case 3414:
case 842:
case 1717:
case 1142:
case 3526:
case 2820:
case 3758:
case 1011:
case 2798:
case 2994:
case 3130:
case 3795:
case 3805:
case 3725:
case 2930:
case 840:
case 559:
case 1470:
case 1261:
case 2790:
case 1296:
case 381:
case 3091:
case 526:
case 3625:
case 3009:
case 1284:
case 3101:
case 800:
case 1038:
case 3668:
case 3272:
case 1090:
case 714:
case 2367:
case 683:
case 3337:
case 3700:
case 2463:
case 1941:
case 1930:
case 3234:
case 2581:
case 1133:
case 1741:
case 2079:
case 2964:
case 2764:
case 3135:
case 2058:
case 1541:
case 1996:
case 2363:
case 2435:
case 3703:
case 2388:
case 2232:
case 4:
case 3593:
case 2355:
case 2374:
case 2242:
case 2628:
case 1595:
case 862:
case 62:
case 1855:
case 4052:
case 822:
case 1333:
case 3343:
case 176:
case 2892:
case 2221:
case 951:
case 3346:
case 187:
case 910:
case 3430:
case 283:
case 989:
case 3833:
case 875:
case 479:
case 3701:
case 3059:
case 858:
case 2181:
case 3882:
case 208:
case 1914:
case 1958:
case 2249:
case 2344:
case 844:
case 534:
case 2560:
case 1250:
case 1781:
case 189:
case 1458:
case 898:
case 281:
case 3601:
case 1249:
case 517:
case 1779:
case 2998:
case 75:
case 347:
case 212:
case 2094:
case 1834:
case 778:
case 3305:
case 577:
case 3309:
case 3821:
case 4018:
case 1271:
case 1838:
case 4068:
case 2810:
case 3100:
case 1688:
case 49:
case 3908:
case 1586:
case 2514:
case 2067:
case 1594:
case 3427:
case 2853:
case 1545:
case 466:
case 456:
case 1298:
case 2603:
case 263:
case 626:
case 439:
case 135:
case 66:
case 3961:
case 3847:
case 2825:
case 185:
case 3584:
case 3596:
case 3468:
case 359:
case 3005:
case 297:
case 1818:
case 2656:
case 52:
case 2247:
case 213:
case 2823:
case 2163:
case 3696:
case 1087:
case 1505:
case 2953:
case 1237:
case 1501:
case 3837:
case 2282:
case 1971:
case 2158:
case 3067:
case 1404:
case 3804:
case 2740:
case 670:
case 2705:
case 1736:
case 438:
case 295:
case 761:
case 390:
case 1975:
case 1770:
case 2035:
case 2311:
case 3919:
case 1607:
case 3699:
case 3270:
case 3049:
case 3760:
case 3310:
case 20:
case 523:
case 574:
case 237:
case 3643:
case 1122:
case 519:
case 198:
case 2587:
case 408:
case 3095:
case 913:
case 656:
case 1276:
case 308:
case 1364:
case 2547:
case 651:
case 2846:
case 3694:
case 1550:
case 528:
case 324:
case 1705:
case 3553:
case 2462:
case 631:
case 2302:
case 1245:
case 3599:
case 3125:
case 3108:
case 1745:
case 1077:
case 1853:
case 3487:
case 2350:
case 131:
case 3947:
case 3782:
case 2201:
case 2037:
case 1726:
case 2916:
case 993:
case 1425:
case 1060:
case 2096:
case 1554:
case 3969:
case 2168:
case 3987:
case 3402:
case 2771:
case 362:
case 3118:
case 1232:
case 787:
case 1531:
case 2259:
case 1431:
case 3974:
case 902:
case 1439:
case 1176:
case 1402:
case 2359:
case 2153:
case 3973:
case 3900:
case 494:
case 3404:
case 516:
case 3950:
case 188:
case 1517:
case 3060:
case 3154:
case 1173:
case 2906:
case 1265:
case 1628:
case 3828:
case 1254:
case 2356:
case 1821:
case 1048:
case 2720:
case 3948:
case 1435:
case 3003:
case 2418:
case 2092:
case 2632:
case 1343:
case 2664:
case 2245:
case 301:
case 2354:
case 3314:
case 3185:
case 3513:
case 3104:
case 3505:
case 4017:
case 3112:
case 2406:
case 818:
case 72:
case 2212:
case 1750:
case 3864:
case 3678:
case 371:
case 2019:
case 1869:
case 1305:
case 1443:
case 335:
case 2479:
case 935:
case 2966:
case 1152:
case 1679:
case 1398:
case 598:
case 2865:
case 2863:
case 717:
case 1721:
case 409:
case 1519:
case 404:
case 1767:
case 1209:
case 3110:
case 1001:
case 2207:
case 2132:
case 1707:
case 3165:
case 244:
case 1993:
case 2641:
case 1028:
case 3647:
case 3170:
case 1686:
case 1808:
case 1827:
case 444:
case 1120:
case 2602:
case 2639:
case 1609:
case 3078:
case 796:
case 2717:
case 3080:
case 3568:
case 274:
case 3282:
case 3247:
case 1626:
case 3073:
case 1883:
case 1692:
case 3761:
case 512:
case 2064:
case 22:
case 303:
case 3415:
case 2110:
case 995:
case 120:
case 774:
case 1065:
case 161:
case 1759:
case 743:
case 4086:
case 731:
case 125:
case 284:
case 3819:
case 2783:
case 1373:
case 1577:
case 2318:
case 1483:
case 1561:
case 871:
case 3720:
case 3387:
case 3271:
case 2084:
case 758:
case 2100:
case 2425:
case 2963:
case 123:
case 3287:
case 541:
case 3851:
case 3323:
case 2715:
case 2278:
case 3455:
case 2774:
case 2531:
case 1171:
case 1819:
case 2426:
case 3187:
case 3993:
case 2005:
case 2809:
case 2353:
case 3589:
case 2866:
case 3235:
case 3876:
case 3239:
case 2633:
case 586:
case 825:
case 2829:
case 322:
case 2814:
case 2724:
case 1291:
case 321:
case 74:
case 2561:
case 530:
case 1544:
case 1267:
case 2119:
case 4065:
case 1049:
case 13:
case 2648:
case 2593:
case 673:
case 3449:
case 2447:
case 46:
case 3915:
case 2236:
case 3936:
case 623:
case 2878:
case 900:
case 2903:
case 393:
case 3232:
case 1020:
case 249:
case 223:
case 4004:
case 3914:
case 76:
case 2617:
case 2663:
case 3164:
case 2619:
case 3280:
case 1067:
case 1734:
case 3251:
case 801:
case 1665:
case 813:
case 3986:
case 3066:
case 3040:
case 1630:
case 2871:
case 1525:
case 2216:
case 957:
case 1238:
case 2382:
case 635:
case 2172:
case 99:
case 3224:
case 3650:
case 2300:
case 353:
case 757:
case 852:
case 1970:
case 3860:
case 1445:
case 4072:
case 2763:
case 2330:
case 1669:
case 9:
case 418:
case 3416:
case 2702:
case 2736:
case 1815:
case 2342:
case 448:
case 3509:
case 2071:
case 1629:
case 482:
case 1202:
case 459:
case 334:
case 2678:
case 433:
case 1487:
case 4031:
case 808:
case 63:
case 708:
case 2806:
case 891:
case 339:
case 164:
case 3443:
case 2956:
case 1199:
case 1320:
case 1754:
case 1872:
case 2987:
case 484:
case 1100:
case 286:
case 2556:
case 3733:
case 2595:
case 779:
case 2723:
case 201:
case 3938:
case 1326:
case 819:
case 3511:
case 3027:
case 3913:
case 144:
case 2518:
case 998:
case 2175:
case 2415:
case 2673:
case 1563:
case 1138:
case 2241:
case 36:
case 504:
case 1460:
case 2485:
case 1401:
case 712:
case 2026:
case 2869:
case 3458:
case 966:
case 82:
case 2529:
case 3611:
case 3381:
case 3081:
case 3220:
case 3079:
case 1683:
case 2833:
case 3364:
case 3328:
case 4032:
case 1247:
case 680:
case 330:
case 1066:
case 1847:
case 2510:
case 1972:
case 630:
case 1699:
case 3739:
case 3529:
case 972:
case 106:
case 503:
case 2116:
case 1085:
case 854:
case 542:
case 621:
case 1051:
case 4034:
case 3885:
case 599:
case 1353:
case 2895:
case 3361:
case 2434:
case 317:
case 3207:
case 2131:
case 1870:
case 3157:
case 1797:
case 1866:
case 1585:
case 711:
case 410:
case 851:
case 344:
case 2686:
case 990:
case 463:
case 1073:
case 70:
case 777:
case 2277:
case 781:
case 941:
case 2453:
case 3433:
case 2371:
case 2:
case 4010:
case 1313:
case 3193:
case 3634:
case 2915:
case 3169:
case 2219:
case 880:
case 4019:
case 769:
case 16:
case 2244:
case 3820:
case 3126:
case 2911:
case 2195:
case 215:
case 2679:
case 1645:
case 1256:
case 2583:
case 1394:
case 2979:
case 316:
case 134:
case 795:
case 1428:
case 3972:
case 3260:
case 1510:
case 1841:
case 100:
case 3258:
case 2874:
case 2360:
case 3551:
case 2640:
case 3636:
case 3626:
case 1757:
case 1727:
case 1041:
case 2269:
case 988:
case 1899:
case 1016:
case 4056:
case 2695:
case 2155:
case 478:
case 90:
case 2614:
case 3628:
case 2000:
case 126:
case 2970:
case 1153:
case 2261:
case 3200:
case 232:
case 2667:
case 2220:
case 1828:
case 197:
case 2343:
case 472:
case 815:
case 58:
case 2997:
case 2978:
case 2666:
case 2265:
case 710:
case 3380:
case 1549:
case 3855:
case 2151:
case 986:
case 94:
case 536:
case 1157:
case 421:
case 3980:
case 620:
case 2405:
case 2120:
case 3812:
case 920:
case 3504:
case 3195:
case 3341:
case 1123:
case 71:
case 4066:
case 2765:
case 1938:
case 3722:
case 1873:
case 366:
case 803:
case 793:
case 2559:
case 240:
case 3055:
case 1064:
case 2461:
case 513:
case 3292:
case 2555:
case 3085:
case 2951:
case 3480:
case 695:
case 1795:
case 203:
case 2095:
case 2052:
case 605:
case 648:
case 2255:
case 1953:
case 3052:
case 2303:
case 3295:
case 2850:
case 2379:
case 2143:
case 140:
case 2520:
case 3785:
case 688:
case 3958:
case 3588:
case 1191:
case 2921:
case 1018:
case 2438:
case 2306:
case 1703:
case 2189:
case 1590:
case 447:
case 1285:
case 436:
case 2327:
case 1826:
case 2477:
case 3711:
case 627:
case 3868:
case 3702:
case 3825:
case 441:
case 2339:
case 3288:
case 3666:
case 2799:
case 2307:
case 56:
case 3909:
case 2230:
case 3822:
case 1032:
case 1787:
case 465:
case 45:
case 3434:
case 2832:
case 1099:
case 794:
case 3665:
case 2781:
case 664:
case 1263:
case 1379:
case 2815:
case 1803:
case 590:
case 2938:
case 2721:
case 1493:
case 597:
case 2502:
case 2180:
case 4094:
case 2381:
case 1937:
case 1890:
case 1322:
case 3399:
case 452:
case 3379:
case 681:
case 403:
case 3011:
case 4037:
case 1843:
case 3540:
case 2314:
case 238:
case 467:
case 1106:
case 3686:
case 2025:
case 3257:
case 323:
case 3491:
case 4030:
case 3857:
case 3243:
case 293:
case 538:
case 2331:
case 1476:
case 3007:
case 3216:
case 1231:
case 3681:
case 4084:
case 979:
case 3607:
case 3658:
case 1178:
case 3931:
case 557:
case 2685:
case 1804:
case 2759:
case 3539:
case 2001:
case 298:
case 3869:
case 1258:
case 206:
case 667:
case 737:
case 1416:
case 767:
case 1942:
case 2257:
case 1553:
case 1695:
case 713:
case 2002:
case 1259:
case 3474:
case 3401:
case 865:
case 3096:
case 2423:
case 2638:
case 1810:
case 1646:
case 1742:
case 3123:
case 367:
case 1145:
case 791:
case 1399:
case 2746:
case 3421:
case 3888:
case 856:
case 4075:
case 1723:
case 709:
case 1963:
case 1118:
case 3424:
case 2256:
case 1915:
case 4025:
case 3838:
case 3579:
case 2792:
case 2115:
case 3878:
case 1187:
case 1533:
case 4089:
case 1126:
case 343:
case 3894:
case 1289:
case 2591:
case 1991:
case 172:
case 3816:
case 1666:
case 1848:
case 2492:
case 2422:
case 3705:
case 1791:
case 1287:
case 3227:
case 3131:
case 3132:
case 3896:
case 2752:
case 336:
case 3373:
case 1809:
case 543:
case 2073:
case 2665:
case 267:
case 1655:
case 1654:
case 2654:
case 2285:
case 3528:
case 3418:
case 936:
case 595:
case 1952:
case 1668:
case 3393:
case 3423:
case 687:
case 533:
case 2902:
case 1344:
case 1214:
case 642:
case 3376:
case 2882:
case 1484:
case 1004:
case 167:
case 2546:
case 1494:
case 1383:
case 3084:
case 3890:
case 2498:
case 2542:
case 1832:
case 2827:
case 2040:
case 3695:
case 3390:
case 2014:
case 759:
case 1624:
case 915:
case 1035:
case 3577:
case 3834:
case 2340:
case 3054:
case 1361:
case 2904:
case 1556:
case 2670:
case 10:
case 2503:
case 228:
case 3946:
case 2976:
case 2575:
case 2968:
case 377:
case 962:
case 3884:
case 2545:
case 3386:
case 1317:
case 143:
case 3469:
case 3412:
case 884:
case 1920:
case 1084:
case 3075:
case 2541:
case 3935:
case 285:
case 253:
case 3991:
case 662:
case 2313:
case 2539:
case 2274:
case 3462:
case 3531:
case 2515:
case 1502:
case 1926:
case 1862:
case 1264:
case 2797:
case 1082:
case 722:
case 360:
case 1708:
case 2836:
case 1973:
case 866:
case 3318:
case 2776:
case 644:
case 679:
case 476:
case 1350:
case 2645:
case 405:
case 2445:
case 103:
case 607:
case 2370:
case 3148:
case 2329:
case 2199:
case 3265:
case 1283:
case 746:
case 1678:
case 933:
case 3718:
case 434:
case 3727:
case 3464:
case 2417:
case 2528:
case 3353:
case 2276:
case 3632:
case 1248:
case 1411:
case 3735:
case 400:
case 1812:
case 3500:
case 802:
case 370:
case 878:
case 2393:
case 1780:
case 1486:
case 1747:
case 1662:
case 2616:
case 80:
case 2170:
case 3791:
case 1319:
case 3039:
case 2291:
case 2362:
case 1959:
case 2974:
case 1046:
case 3949:
case 2600:
case 1224:
case 2065:
case 2965:
case 128:
case 2069:
case 1446:
case 1979:
case 4055:
case 1079:
case 2828:
case 1580:
case 1687:
case 1740:
case 2217:
case 2672:
case 3927:
case 2349:
case 1765:
case 3428:
case 191:
case 2368:
case 1777:
case 3348:
case 4083:
case 1659:
case 1213:
case 1511:
case 1823:
case 742:
case 2838:
case 2068:
case 1042:
case 3854:
case 3657:
case 3267:
case 2516:
case 1116:
case 3201:
case 2450:
case 2386:
case 2018:
case 954:
case 3107:
case 1861:
case 1089:
case 3955:
case 2766:
case 1195:
case 2993:
case 3475:
case 35:
case 1345:
case 3523:
case 879:
case 955:
case 1854:
case 1186:
case 3891:
case 3742:
case 2512:
case 2644:
case 3385:
case 3779:
case 2831:
case 2021:
case 2857:
case 2387:
case 3856:
case 2884:
case 3351:
case 1382:
case 2429:
case 3772:
case 2134:
case 2304:
case 3911:
case 1255:
case 1950:
case 1684:
case 3736:
case 3411:
case 2183:
case 3026:
case 1619:
case 1239:
case 3349:
case 629:
case 2305:
case 3817:
case 689:
case 3545:
case 2049:
case 2777:
case 2499:
case 3990:
case 950:
case 3957:
case 3693:
case 2072:
case 4014:
case 2610:
case 2449:
case 500:
case 3960:
case 1031:
case 1623:
case 2361:
case 2948:
case 2803:
case 3667:
case 1728:
case 26:
case 2369:
case 1581:
case 1521:
case 2893:
case 1569:
case 3522:
case 786:
case 848:
case 624:
case 460:
case 1190:
case 2234:
case 21:
case 311:
case 1282:
case 241:
case 3520:
case 2962:
case 1894:
case 2881:
case 1270:
case 649:
case 1620:
case 2748:
case 1575:
case 2606:
case 3493:
case 190:
case 2808:
case 1210:
case 1588:
case 3802:
case 2729:
case 1690:
case 1753:
case 3245:
case 2431:
case 1134:
case 1466:
case 146:
case 3127:
case 914:
case 1292:
case 1928:
case 1437:
case 727:
case 3448:
case 1260:
case 643:
case 4015:
case 2066:
case 1867:
case 2621:
case 147:
case 2805:
case 1088:
case 2795:
case 97:
case 2500:
case 1988:
case 1169:
case 3748:
case 690:
case 3677:
case 3806:
case 3451:
case 2848:
case 2975:
case 2235:
case 571:
case 57:
case 3615:
case 1606:
case 930:
case 1539:
case 1537:
case 3137:
case 2651:
case 1086:
case 2538:
case 3436:
case 3793:
case 2483:
case 1558:
case 2861:
case 1377:
case 911:
case 1462:
case 1652:
case 3654:
case 485:
case 978:
case 1697:
case 1618:
case 1492:
case 2077:
case 2570:
case 2380:
case 1807:
case 1400:
case 660:
case 3622:
case 2872:
case 1568:
case 160:
case 2913:
case 2572:
case 2714:
case 124:
case 2674:
case 394:
case 3447:
case 1557:
case 1980:
case 2446:
case 2523:
case 3692:
case 1328:
case 810:
case 1651:
case 73:
case 3278:
case 1663:
case 473:
case 3874:
case 1945:
case 12:
case 3530:
case 2246:
case 1877:
case 756:
case 2657:
case 419:
case 3519:
case 3019:
case 2847:
case 3352:
case 1059:
case 44:
case 3964:
case 1124:
case 2917:
case 3171:
case 2281:
case 1233:
case 443:
case 2424:
case 3616:
case 3797:
case 209:
case 551:
case 2544:
case 3719:
case 3870:
case 329:
case 357:
case 3660:
case 678:
case 8:
case 2548:
case 3773:
case 3043:
case 3840:
case 2875:
case 2778:
case 373:
case 2693:
case 2925:
case 296:
case 2690:
case 2322:
case 916:
case 3926:
case 1230:
case 2250:
case 1856:
case 3708:
case 1201:
case 3858:
case 2755:
case 893:
case 3093:
case 1167:
case 754:
case 3984:
case 3359:
case 3070:
case 1640:
case 510:
case 2321:
case 2751:
case 2701:
case 2734:
case 3848:
case 4012:
case 2590:
case 4087:
case 2522:
case 1878:
case 3144:
case 1175:
case 1409:
case 18:
case 265:
case 1696:
case 790:
case 2378:
case 28:
case 3460:
case 1058:
case 789:
case 2944:
case 1514:
case 565:
case 3293:
case 3219:
case 894:
case 1837:
case 1605:
case 982:
case 2889:
case 1052:
case 1315:
case 3363:
case 1911:
case 1162:
case 3778:
case 946:
case 1303:
case 86:
case 2787:
case 2985:
case 665:
case 907:
case 15:
case 2430:
case 2200:
case 1013:
case 698:
case 2240:
case 2967:
case 1183:
case 3275:
case 589:
case 256:
case 78:
case 3303:
case 3905:
case 3184:
case 3746:
case 2275:
case 1172:
case 2440:
case 2920:
case 3738:
case 1103:
case 1222:
case 1200:
case 1211:
case 2310:
case 3482:
case 2801:
case 2452:
case 3313:
case 2537:
case 3176:
case 3562:
case 1485:
case 823:
case 2625:
case 287:
case 2336:
case 3453:
case 3917:
case 1966:
case 672:
case 3498:
case 1063:
case 1597:
case 3481:
case 1691:
case 3613:
case 2923:
case 3575:
case 338:
case 254:
case 3670:
case 2487:
case 1306:
case 2283:
case 1813:
case 2605:
case 1839:
case 2262:
case 1888:
case 2144:
case 340:
case 1675:
case 1072:
case 2251:
case 2203:
case 1207:
case 1107:
case 1180:
case 1923:
case 741:
case 1132:
case 558:
case 3077:
case 3321:
case 1860:
case 1006:
case 3967:
case 1301:
case 3425:
case 2580:
case 2193:
case 2123:
case 4058:
case 3571:
case 1943:
case 2176:
case 1009:
case 1408:
case 3406:
case 1681:
case 654:
case 2981:
case 1378:
case 3794:
case 3014:
case 797:
case 3213:
case 2770:
case 1055:
case 614:
case 1147:
case 2816:
case 3661:
case 455:
case 341:
case 1479:
case 3633:
case 2661:
case 3045:
case 2029:
case 2716:
case 1768:
case 242:
case 2320:
case 2950:
case 412:
case 2226:
case 3745:
case 3895:
case 726:
case 3382:
case 2101:
case 1530:
case 704:
case 1506:
case 468:
case 2687:
case 956:
case 1387:
case 2650:
case 1426:
case 3662:
case 3768:
case 3367:
case 19:
case 3994:
case 3012:
case 1262:
case 3710:
case 3759:
case 3818:
case 3392:
case 2946:
case 2525:
case 2818:
case 426:
case 2097:
case 1478:
case 1272:
case 348:
case 1457:
case 959:
case 2293:
case 3730:
case 1465:
case 2136:
case 812:
case 2870:
case 355:
case 1766:
case 1208:
case 1057:
case 750:
case 3325:
case 2059:
case 2898:
case 2147:
case 3181:
case 3016:
case 601:
case 1762:
case 2839:
case 3147:
case 2660:
case 3729:
case 1599:
case 117:
case 4028:
case 788:
case 1027:
case 873:
case 2668:
case 2229:
case 3156:
case 587:
case 1868:
case 2867:
case 3591:
case 4038:
case 3814:
case 596:
case 917:
case 1527:
case 2396:
case 552:
case 2624:
case 3945:
case 2191:
case 1356:
case 3527:
case 300:
case 2511:
case 3687:
case 4053:
case 3631:
case 1560:
case 2004:
case 2689:
case 2140:
case 1613:
case 1370:
case 319:
case 2960:
case 1892:
case 4000:
case 3907:
case 3507:
case 3461:
case 895:
case 3336:
case 1905:
case 773:
case 3198:
case 1989:
case 1672:
case 3781:
case 2270:
case 1334:
case 1463:
case 2301:
case 889:
case 2455:
case 1499:
case 904:
case 2213:
case 947:
case 2949:
case 1312:
case 3623:
case 3395:
case 3548:
case 932:
case 3716:
case 130:
case 2289:
case 2989:
case 1744:
case 1656:
case 137:
case 235:
case 2133:
case 3115:
case 1128:
case 1130:
case 1897:
case 886:
case 11:
case 581:
case 67:
case 4029:
case 3358:
case 3906:
case 847:
case 3160:
case 216:
case 1773:
case 2038:
case 104:
case 1017:
case 136:
case 784:
case 602:
case 2137:
case 833:
case 3397:
case 2237:
case 1960:
case 3188:
case 1146:
case 4050:
case 1374:
case 1733:
case 963:
case 3238:
case 3630:
case 2699:
case 471:
case 3090:
case 3844:
case 2973:
case 2508:
case 1503:
case 1576:
case 617:
case 251:
case 1129:
case 1546:
case 3879:
case 1354:
case 843:
case 3022:
case 1783:
case 593:
case 30:
case 3129:
case 1743:
case 3286:
case 2604:
case 3581:
case 3583:
case 1849:
case 481:
case 3466:
case 196:
case 489:
case 2254:
case 3450:
case 1901:
case 1061:
case 2697:
case 2161:
case 1349:
case 3400:
case 2239:
case 3479:
case 1092:
case 3966:
case 1634:
case 2622:
case 3691:
case 65:
case 2421:
case 1030:
case 3775:
case 3608:
case 1601:
case 1528:
case 1347:
case 2106:
case 1825:
case 1278:
case 1875:
case 3597:
case 397:
case 1053:
case 53:
case 310:
case 780:
case 561:
case 1395:
case 2323:
case 2742:
case 835:
case 2206:
case 1054:
case 2549:
case 3714:
case 3252:
case 3807:
case 2290:
case 3683:
case 1771:
case 841:
case 3886:
case 145:
case 314:
case 3008:
case 2972:
case 647:
case 2152:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1670598002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,];
var gg_b = "1670598002/";

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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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
