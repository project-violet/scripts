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
var o = 1;
switch (g) {
case 2017:
case 2869:
case 2116:
case 2769:
case 696:
case 2617:
case 303:
case 2904:
case 3843:
case 42:
case 1868:
case 1085:
case 4016:
case 3460:
case 1685:
case 2938:
case 3595:
case 2721:
case 769:
case 1939:
case 3304:
case 3889:
case 2389:
case 2704:
case 2804:
case 108:
case 676:
case 2969:
case 2278:
case 1247:
case 753:
case 3035:
case 564:
case 1692:
case 2562:
case 2103:
case 4094:
case 2545:
case 359:
case 3369:
case 2194:
case 3053:
case 2343:
case 3989:
case 1400:
case 645:
case 3808:
case 3708:
case 3133:
case 499:
case 2327:
case 95:
case 3274:
case 3834:
case 3734:
case 1984:
case 3640:
case 2005:
case 489:
case 1495:
case 2459:
case 3850:
case 1291:
case 434:
case 200:
case 3934:
case 1076:
case 1177:
case 1784:
case 1309:
case 1884:
case 2090:
case 1560:
case 3432:
case 1149:
case 3727:
case 3827:
case 2690:
case 315:
case 748:
case 2308:
case 3623:
case 732:
case 1240:
case 3023:
case 2336:
case 817:
case 491:
case 3351:
case 2172:
case 3936:
case 3507:
case 1:
case 3467:
case 83:
case 1322:
case 2751:
case 2851:
case 2473:
case 1415:
case 3091:
case 1211:
case 761:
case 936:
case 1975:
case 701:
case 312:
case 3515:
case 2265:
case 3757:
case 2242:
case 2806:
case 2706:
case 3820:
case 123:
case 3481:
case 1428:
case 2196:
case 2429:
case 4014:
case 978:
case 447:
case 1612:
case 1775:
case 2906:
case 2320:
case 197:
case 226:
case 2501:
case 3679:
case 3079:
case 3306:
case 3920:
case 642:
case 2713:
case 2813:
case 1235:
case 3146:
case 2357:
case 3042:
case 2352:
case 558:
case 2939:
case 683:
case 853:
case 3665:
case 3559:
case 3065:
case 154:
case 2685:
case 2868:
case 2532:
case 3339:
case 627:
case 3952:
case 1769:
case 1869:
case 521:
case 366:
case 2839:
case 1194:
case 306:
case 1545:
case 2092:
case 1562:
case 1103:
case 1738:
case 3368:
case 3430:
case 418:
case 2968:
case 2247:
case 740:
case 2388:
case 809:
case 1278:
case 1526:
case 3852:
case 268:
case 1969:
case 1704:
case 1005:
case 2984:
case 1350:
case 2223:
case 630:
case 249:
case 3809:
case 3384:
case 3445:
case 543:
case 3964:
case 1327:
case 848:
case 3241:
case 2400:
case 3462:
case 1690:
case 4077:
case 3163:
case 1090:
case 3210:
case 2076:
case 2784:
case 1148:
case 4049:
case 160:
case 4083:
case 2458:
case 3864:
case 3764:
case 3909:
case 1459:
case 3822:
case 2074:
case 73:
case 2786:
case 241:
case 59:
case 1172:
case 1041:
case 990:
case 1641:
case 3205:
case 3401:
case 3866:
case 3561:
case 2366:
case 1487:
case 980:
case 970:
case 717:
case 58:
case 2415:
case 1851:
case 3290:
case 919:
case 2322:
case 425:
case 3966:
case 320:
case 3386:
case 1429:
case 31:
case 1196:
case 223:
case 1697:
case 287:
case 1806:
case 1242:
case 1461:
case 3078:
case 933:
case 3678:
case 337:
case 2407:
case 1114:
case 297:
case 1537:
case 1320:
case 2253:
case 3456:
case 2775:
case 2875:
case 2612:
case 64:
case 1456:
case 4025:
case 2292:
case 3114:
case 3906:
case 228:
case 2306:
case 2920:
case 2679:
case 2146:
case 2047:
case 3357:
case 829:
case 1078:
case 3813:
case 2647:
case 3524:
case 2515:
case 2857:
case 3265:
case 3706:
case 3806:
case 3461:
case 3242:
case 3097:
case 3196:
case 561:
case 2820:
case 2720:
case 11:
case 3429:
case 1966:
case 2276:
case 1386:
case 3473:
case 3610:
case 1424:
case 2836:
case 2736:
case 89:
case 782:
case 1922:
case 3487:
case 2691:
case 4018:
case 3336:
case 2531:
case 1866:
case 2118:
case 3951:
case 3172:
case 3641:
case 532:
case 1722:
case 1822:
case 945:
case 2507:
case 87:
case 144:
case 3459:
case 2908:
case 2750:
case 2850:
case 3334:
case 3148:
case 300:
case 465:
case 405:
case 215:
case 3554:
case 1163:
case 1210:
case 1502:
case 2808:
case 2133:
case 2708:
case 3327:
case 1462:
case 1241:
case 1445:
case 1709:
case 1809:
case 474:
case 484:
case 2640:
case 2834:
case 3350:
case 2040:
case 3005:
case 1426:
case 3605:
case 439:
case 4055:
case 942:
case 1752:
case 3704:
case 2943:
case 3804:
case 3793:
case 3893:
case 3278:
case 821:
case 3838:
case 3738:
case 3103:
case 2212:
case 3921:
case 1430:
case 764:
case 166:
case 688:
case 2989:
case 3343:
case 553:
case 106:
case 2369:
case 2653:
case 259:
case 3904:
case 2843:
case 509:
case 263:
case 1297:
case 3869:
case 3769:
case 3402:
case 2338:
case 2460:
case 413:
case 1454:
case 3721:
case 3821:
case 3480:
case 2393:
case 1065:
case 2595:
case 1559:
case 1042:
case 1171:
case 1642:
case 2789:
case 2558:
case 698:
case 2678:
case 1647:
case 524:
case 1047:
case 1146:
case 1920:
case 1079:
case 128:
case 3431:
case 397:
case 3407:
case 993:
case 1292:
case 3775:
case 2456:
case 3170:
case 1285:
case 1820:
case 1720:
case 323:
case 1481:
case 40:
case 46:
case 3428:
case 1313:
case 1757:
case 1515:
case 729:
case 1691:
case 1091:
case 1836:
case 2424:
case 2290:
case 220:
case 78:
case 1276:
case 517:
case 3581:
case 3322:
case 611:
case 3074:
case 1936:
case 341:
case 3674:
case 2722:
case 457:
case 1351:
case 1118:
case 53:
case 4019:
case 1531:
case 2766:
case 914:
case 2401:
case 3240:
case 2502:
case 3149:
case 1432:
case 1727:
case 1827:
case 3676:
case 3884:
case 3076:
case 4063:
case 1850:
case 2909:
case 3458:
case 1611:
case 1908:
case 850:
case 244:
case 3482:
case 1927:
case 743:
case 1198:
case 1734:
case 3364:
case 2199:
case 1640:
case 1155:
case 1274:
case 690:
case 2384:
case 2462:
case 1133:
case 1708:
case 1808:
case 159:
case 1653:
case 875:
case 3739:
case 266:
case 2430:
case 1500:
case 2988:
case 3092:
case 416:
case 1582:
case 1321:
case 3968:
case 3279:
case 368:
case 2752:
case 2852:
case 1789:
case 1889:
case 1558:
case 2642:
case 2171:
case 721:
case 1595:
case 2065:
case 2454:
case 3085:
case 3768:
case 3868:
case 3685:
case 2952:
case 1843:
case 1743:
case 3228:
case 3152:
case 1916:
case 1485:
case 3660:
case 1344:
case 2602:
case 3060:
case 478:
case 488:
case 947:
case 749:
case 860:
case 1703:
case 1138:
case 3971:
case 1894:
case 2139:
case 3231:
case 1716:
case 1540:
case 498:
case 544:
case 436:
case 1903:
case 2256:
case 1492:
case 3207:
case 613:
case 3453:
case 1994:
case 1000:
case 1600:
case 665:
case 321:
case 2399:
case 3164:
case 3999:
case 2201:
case 358:
case 2877:
case 2184:
case 971:
case 1082:
case 3863:
case 3763:
case 1535:
case 1333:
case 2405:
case 694:
case 1695:
case 1095:
case 2224:
case 2983:
case 2059:
case 3349:
case 135:
case 1658:
case 1058:
case 3109:
case 3377:
case 2977:
case 153:
case 1948:
case 854:
case 1476:
case 3899:
case 240:
case 674:
case 3383:
case 2490:
case 708:
case 3585:
case 991:
case 3032:
case 3963:
case 1579:
case 1547:
case 1151:
case 723:
case 979:
case 777:
case 51:
case 1318:
case 3512:
case 2441:
case 1474:
case 2245:
case 101:
case 3719:
case 3166:
case 3067:
case 45:
case 2410:
case 2073:
case 3295:
case 1872:
case 4086:
case 2087:
case 537:
case 3491:
case 2687:
case 3370:
case 2061:
case 1996:
case 3081:
case 1028:
case 2629:
case 39:
case 1260:
case 2254:
case 2029:
case 1412:
case 1346:
case 2230:
case 1914:
case 217:
case 3574:
case 1007:
case 520:
case 1896:
case 1796:
case 2770:
case 602:
case 2870:
case 3447:
case 7:
case 662:
case 38:
case 37:
case 2511:
case 1139:
case 3261:
case 4038:
case 3316:
case 2794:
case 2138:
case 3944:
case 3465:
case 433:
case 3590:
case 1002:
case 1602:
case 2485:
case 2344:
case 3229:
case 1371:
case 2281:
case 2104:
case 1417:
case 4093:
case 346:
case 3189:
case 2121:
case 3630:
case 2903:
case 3744:
case 3030:
case 700:
case 3143:
case 2540:
case 1849:
case 3026:
case 3127:
case 375:
case 2333:
case 3626:
case 2535:
case 2082:
case 3998:
case 2748:
case 1777:
case 1184:
case 3955:
case 1399:
case 754:
case 3045:
case 2355:
case 3150:
case 925:
case 269:
case 3662:
case 2600:
case 2000:
case 3273:
case 1949:
case 395:
case 140:
case 2476:
case 3855:
case 3134:
case 2948:
case 1977:
case 3287:
case 1542:
case 235:
case 3833:
case 2095:
case 2695:
case 261:
case 3037:
case 3637:
case 1319:
case 2972:
case 897:
case 2151:
case 2547:
case 1226:
case 3601:
case 2579:
case 452:
case 1687:
case 1186:
case 1087:
case 3624:
case 823:
case 2772:
case 2872:
case 2015:
case 726:
case 124:
case 1410:
case 1073:
case 3718:
case 1673:
case 2232:
case 657:
case 3597:
case 551:
case 3846:
case 1970:
case 232:
case 2260:
case 3202:
case 2996:
case 3396:
case 2714:
case 3825:
case 3725:
case 1661:
case 1061:
case 2591:
case 13:
case 1175:
case 8:
case 392:
case 3478:
case 841:
case 1770:
case 3946:
case 2031:
case 2796:
case 3314:
case 922:
case 2106:
case 117:
case 2607:
case 66:
case 3056:
case 3541:
case 4006:
case 60:
case 2412:
case 913:
case 172:
case 182:
case 1656:
case 1541:
case 317:
case 1314:
case 2479:
case 720:
case 1478:
case 2447:
case 1946:
case 3870:
case 3175:
case 192:
case 3661:
case 1825:
case 3061:
case 2081:
case 1746:
case 3629:
case 29:
case 984:
case 812:
case 691:
case 2719:
case 2067:
case 3410:
case 4066:
case 3673:
case 737:
case 1818:
case 1718:
case 939:
case 324:
case 4022:
case 2122:
case 3087:
case 2919:
case 1918:
case 1372:
case 3226:
case 3578:
case 851:
case 3262:
case 3441:
case 2512:
case 828:
case 3319:
case 1637:
case 229:
case 3059:
case 863:
case 2215:
case 104:
case 1733:
case 706:
case 1833:
case 3659:
case 803:
case 3363:
case 164:
case 766:
case 1348:
case 2377:
case 508:
case 1287:
case 2109:
case 568:
case 2411:
case 3542:
case 2899:
case 1855:
case 340:
case 3977:
case 1898:
case 2032:
case 2963:
case 3949:
case 2383:
case 2632:
case 1273:
case 2592:
case 3783:
case 3883:
case 221:
case 1045:
case 3399:
case 1150:
case 3877:
case 3777:
case 689:
case 1955:
case 3201:
case 2999:
case 3749:
case 1127:
case 1026:
case 1998:
case 2863:
case 2763:
case 902:
case 2435:
case 1505:
case 1630:
case 496:
case 1844:
case 146:
case 744:
case 3371:
case 2576:
case 2060:
case 3002:
case 1590:
case 4052:
case 3602:
case 3080:
case 3680:
case 1465:
case 1261:
case 1442:
case 3139:
case 17:
case 18:
case 3631:
case 2120:
case 3031:
case 1479:
case 3914:
case 3607:
case 4057:
case 3007:
case 1574:
case 2541:
case 3346:
case 2157:
case 2056:
case 2746:
case 2846:
case 332:
case 1081:
case 3591:
case 292:
case 1258:
case 81:
case 751:
case 3615:
case 2624:
case 2718:
case 728:
case 2818:
case 3232:
case 526:
case 1067:
case 2597:
case 1667:
case 2037:
case 2136:
case 3318:
case 1200:
case 625:
case 2918:
case 1282:
case 2601:
case 3579:
case 1423:
case 1919:
case 957:
case 2273:
case 1632:
case 295:
case 4034:
case 1032:
case 1963:
case 2798:
case 1585:
case 2134:
case 1799:
case 1899:
case 2855:
case 2755:
case 3476:
case 414:
case 3658:
case 3058:
case 3695:
case 2833:
case 2733:
case 335:
case 3095:
case 1863:
case 866:
case 2998:
case 3082:
case 3333:
case 4027:
case 3848:
case 158:
case 2150:
case 369:
case 3553:
case 3355:
case 309:
case 121:
case 4050:
case 246:
case 1207:
case 500:
case 1871:
case 1771:
case 1453:
case 560:
case 3903:
case 2030:
case 3121:
case 427:
case 4089:
case 4043:
case 483:
case 2505:
case 622:
case 2394:
case 3169:
case 715:
case 348:
case 2143:
case 2316:
case 2442:
case 2261:
case 3703:
case 3138:
case 2229:
case 2054:
case 493:
case 2590:
case 1576:
case 3916:
case 143:
case 3281:
case 2960:
case 3185:
case 830:
case 3902:
case 814:
case 3404:
case 2296:
case 113:
case 4065:
case 1830:
case 322:
case 1044:
case 2302:
case 3360:
case 1644:
case 3702:
case 745:
case 992:
case 3469:
case 216:
case 3192:
case 1930:
case 3421:
case 406:
case 2450:
case 1945:
case 578:
case 1464:
case 883:
case 1382:
case 2272:
case 3759:
case 3588:
case 174:
case 776:
case 786:
case 1962:
case 1926:
case 635:
case 1098:
case 827:
case 2568:
case 2427:
case 2699:
case 1569:
case 139:
case 2539:
case 598:
case 536:
case 3959:
case 796:
case 1762:
case 1538:
case 3332:
case 3683:
case 738:
case 2408:
case 165:
case 1593:
case 2359:
case 3049:
case 1726:
case 3552:
case 3077:
case 1358:
case 1018:
case 3451:
case 964:
case 904:
case 1123:
case 2619:
case 3887:
case 3787:
case 3174:
case 1506:
case 742:
case 1824:
case 1249:
case 420:
case 2248:
case 1277:
case 661:
case 2387:
case 507:
case 1801:
case 1701:
case 601:
case 567:
case 3367:
case 84:
case 1191:
case 975:
case 1737:
case 1837:
case 2575:
case 1283:
case 1924:
case 2373:
case 3381:
case 3961:
case 1756:
case 3244:
case 26:
case 3929:
case 20:
case 2361:
case 41:
case 2981:
case 3566:
case 3861:
case 1625:
case 3761:
case 2294:
case 2203:
case 3112:
case 2457:
case 55:
case 1551:
case 437:
case 1646:
case 2178:
case 3829:
case 4078:
case 2420:
case 2781:
case 2881:
case 1307:
case 1179:
case 2644:
case 1165:
case 3354:
case 2730:
case 2830:
case 98:
case 97:
case 1671:
case 213:
case 3534:
case 3616:
case 519:
case 1296:
case 3016:
case 1960:
case 3003:
case 3603:
case 2488:
case 4053:
case 3094:
case 1489:
case 1214:
case 99:
case 1443:
case 4035:
case 1860:
case 1760:
case 3468:
case 2854:
case 239:
case 1099:
case 3219:
case 2055:
case 533:
case 1699:
case 2655:
case 2140:
case 1568:
case 1732:
case 1832:
case 3982:
case 838:
case 2098:
case 2300:
case 2698:
case 3362:
case 2962:
case 555:
case 284:
case 3900:
case 3326:
case 3795:
case 1272:
case 2464:
case 3758:
case 3589:
case 1450:
case 399:
case 2504:
case 3048:
case 2358:
case 656:
case 1434:
case 3648:
case 415:
case 1663:
case 2395:
case 2726:
case 1359:
case 886:
case 1932:
case 773:
case 2593:
case 929:
case 3782:
case 727:
case 1408:
case 294:
case 3700:
case 2845:
case 2745:
case 379:
case 2111:
case 1539:
case 3958:
case 3141:
case 3072:
case 3715:
case 2724:
case 2824:
case 3672:
case 3557:
case 1436:
case 391:
case 3301:
case 2506:
case 3337:
case 1867:
case 1767:
case 2618:
case 624:
case 2018:
case 2924:
case 2283:
case 958:
case 1575:
case 2737:
case 2422:
case 2191:
case 371:
case 2701:
case 2801:
case 2277:
case 2466:
case 1387:
case 842:
case 921:
case 2513:
case 2249:
case 2315:
case 3831:
case 3731:
case 1981:
case 3197:
case 3696:
case 2756:
case 3707:
case 2328:
case 412:
case 3728:
case 2307:
case 3931:
case 4047:
case 1781:
case 1881:
case 2046:
case 3356:
case 552:
case 428:
case 2551:
case 4079:
case 1457:
case 1203:
case 2025:
case 3014:
case 1294:
case 2331:
case 347:
case 147:
case 1014:
case 2406:
case 4012:
case 1536:
case 2861:
case 497:
case 3203:
case 811:
case 2829:
case 692:
case 75:
case 3881:
case 2961:
case 2244:
case 3329:
case 487:
case 948:
case 2670:
case 30:
case 682:
case 672:
case 2070:
case 2929:
case 852:
case 1197:
case 3361:
case 1696:
case 1110:
case 4:
case 909:
case 1324:
case 1486:
case 767:
case 3373:
case 707:
case 2773:
case 2873:
case 542:
case 1337:
case 1520:
case 3867:
case 3019:
case 2255:
case 1301:
case 2174:
case 2887:
case 4074:
case 441:
case 1141:
case 2233:
case 1815:
case 1715:
case 179:
case 189:
case 3539:
case 2683:
case 3408:
case 2959:
case 2083:
case 1995:
case 4076:
case 798:
case 1782:
case 2649:
case 1190:
case 3932:
case 833:
case 2077:
case 538:
case 1048:
case 110:
case 2677:
case 596:
case 2552:
case 1648:
case 199:
case 1895:
case 695:
case 1326:
case 2759:
case 449:
case 778:
case 2218:
case 3427:
case 3832:
case 3732:
case 1362:
case 576:
case 3099:
case 1219:
case 3699:
case 1543:
case 3760:
case 3860:
case 2802:
case 2702:
case 2246:
case 819:
case 1468:
case 218:
case 1694:
case 1550:
case 4092:
case 1094:
case 3214:
case 3489:
case 2564:
case 2192:
case 2880:
case 870:
case 545:
case 2493:
case 12:
case 646:
case 1534:
case 3296:
case 1117:
case 1016:
case 3071:
case 3142:
case 2509:
case 890:
case 3302:
case 2360:
case 2980:
case 1354:
case 3165:
case 1508:
case 2931:
case 3179:
case 3646:
case 3551:
case 1829:
case 3147:
case 2356:
case 3046:
case 1861:
case 1761:
case 1406:
case 752:
case 247:
case 2731:
case 1566:
case 2197:
case 1070:
case 1929:
case 362:
case 67:
case 302:
case 3756:
case 3856:
case 1381:
case 1961:
case 2707:
case 85:
case 3283:
case 271:
case 281:
case 3422:
case 3837:
case 3737:
case 3191:
case 1987:
case 3466:
case 3277:
case 4010:
case 629:
case 3801:
case 3701:
case 3315:
case 3249:
case 2263:
case 2110:
case 2715:
case 2557:
case 1233:
case 54:
case 2141:
case 940:
case 2072:
case 3506:
case 4041:
case 1787:
case 2299:
case 1255:
case 331:
case 2337:
case 1298:
case 807:
case 867:
case 1451:
case 1873:
case 1773:
case 1677:
case 621:
case 1552:
case 210:
case 3504:
case 4090:
case 1077:
case 527:
case 2190:
case 2882:
case 365:
case 3593:
case 3395:
case 305:
case 3538:
case 394:
case 1083:
case 1959:
case 878:
case 1683:
case 1332:
case 658:
case 573:
case 3409:
case 3745:
case 3845:
case 279:
case 4005:
case 924:
case 3569:
case 755:
case 2484:
case 2219:
case 3926:
case 3300:
case 3698:
case 3098:
case 2982:
case 3382:
case 733:
case 836:
case 384:
case 3033:
case 2795:
case 1859:
case 2900:
case 299:
case 2589:
case 2758:
case 2603:
case 1880:
case 1421:
case 1192:
case 1564:
case 2550:
case 1469:
case 530:
case 93:
case 2330:
case 2468:
case 2527:
case 514:
case 1702:
case 2354:
case 3044:
case 1980:
case 3830:
case 3730:
case 719:
case 3644:
case 1438:
case 1509:
case 2439:
case 1404:
case 2016:
case 313:
case 780:
case 1902:
case 1185:
case 4017:
case 1493:
case 3954:
case 3270:
case 739:
case 2154:
case 3693:
case 450:
case 1160:
case 2548:
case 1577:
case 1652:
case 3917:
case 599:
case 4054:
case 1052:
case 1942:
case 774:
case 176:
case 2471:
case 2853:
case 2753:
case 333:
case 1385:
case 3638:
case 3038:
case 1965:
case 937:
case 2935:
case 3598:
case 3817:
case 3069:
case 705:
case 3353:
case 283:
case 3669:
case 2089:
case 196:
case 794:
case 91:
case 4030:
case 3533:
case 534:
case 1088:
case 3021:
case 446:
case 3335:
case 2050:
case 1664:
case 2145:
case 1064:
case 4045:
case 920:
case 1433:
case 2305:
case 3890:
case 3790:
case 1251:
case 2027:
case 475:
case 380:
case 370:
case 2940:
case 2499:
case 404:
case 3222:
case 1376:
case 2911:
case 2286:
case 1009:
case 3158:
case 2608:
case 2390:
case 3544:
case 3195:
case 3805:
case 3705:
case 3449:
case 145:
case 390:
case 2034:
case 3311:
case 3266:
case 495:
case 3477:
case 3546:
case 3710:
case 3051:
case 2419:
case 2923:
case 944:
case 2636:
case 2514:
case 311:
case 2036:
case 762:
case 6:
case 2791:
case 4037:
case 3941:
case 1570:
case 1666:
case 641:
case 3209:
case 2991:
case 80:
case 352:
case 3841:
case 492:
case 2397:
case 142:
case 3013:
case 3470:
case 906:
case 24:
case 2747:
case 731:
case 1778:
case 1878:
case 3997:
case 3128:
case 697:
case 2779:
case 3379:
case 1425:
case 3006:
case 2572:
case 3347:
case 1312:
case 3518:
case 1446:
case 857:
case 2268:
case 677:
case 2020:
case 687:
case 1269:
case 3797:
case 3897:
case 581:
case 928:
case 3792:
case 3180:
case 2965:
case 2444:
case 1275:
case 1471:
case 1753:
case 1853:
case 865:
case 1317:
case 3639:
case 805:
case 286:
case 894:
case 388:
case 2577:
case 4060:
case 1548:
case 3416:
case 951:
case 3102:
case 3563:
case 1835:
case 2688:
case 1130:
case 2765:
case 1689:
case 2742:
case 2842:
case 296:
case 1089:
case 2206:
case 1953:
case 238:
case 912:
case 183:
case 173:
case 1043:
case 3220:
case 336:
case 884:
case 874:
case 654:
case 3885:
case 3785:
case 1935:
case 1499:
case 3776:
case 3876:
case 2455:
case 3684:
case 1027:
case 1126:
case 458:
case 1627:
case 2433:
case 1650:
case 1145:
case 2064:
case 660:
case 1811:
case 2664:
case 3448:
case 3976:
case 1740:
case 1034:
case 4032:
case 2132:
case 1463:
case 3159:
case 114:
case 716:
case 1390:
case 130:
case 2376:
case 518:
case 2009:
case 429:
case 3974:
case 1891:
case 1791:
case 3250:
case 915:
case 1137:
case 1514:
case 1636:
case 76:
case 70:
case 2374:
case 1923:
case 1419:
case 1310:
case 3208:
case 1124:
case 2022:
case 1991:
case 3086:
case 3187:
case 3874:
case 862:
case 3234:
case 1723:
case 2167:
case 3173:
case 2570:
case 4067:
case 35:
case 2204:
case 1779:
case 1879:
case 2181:
case 2878:
case 3129:
case 1847:
case 1747:
case 2293:
case 959:
case 3075:
case 757:
case 242:
case 3675:
case 2238:
case 3812:
case 1239:
case 3519:
case 1979:
case 1020:
case 3243:
case 1268:
case 2446:
case 2978:
case 2312:
case 1947:
case 3378:
case 831:
case 963:
case 1657:
case 2425:
case 2006:
case 107:
case 2606:
case 167:
case 2288:
case 771:
case 3057:
case 61:
case 3572:
case 4031:
case 2131:
case 1519:
case 3620:
case 2897:
case 2797:
case 3020:
case 1243:
case 3979:
case 3397:
case 531:
case 637:
case 968:
case 1075:
case 908:
case 1129:
case 4028:
case 2013:
case 2128:
case 3879:
case 1496:
case 2252:
case 2997:
case 1173:
case 15:
case 2910:
case 2391:
case 3723:
case 1234:
case 3596:
case 4015:
case 1686:
case 2209:
case 3991:
case 1187:
case 1086:
case 3124:
case 2115:
case 252:
case 3341:
case 2710:
case 2546:
case 3923:
case 3419:
case 3284:
case 3137:
case 3891:
case 3791:
case 620:
case 1974:
case 3514:
case 3636:
case 1472:
case 3286:
case 2158:
case 435:
case 4095:
case 314:
case 2544:
case 1159:
case 2483:
case 3390:
case 2990:
case 2805:
case 941:
case 1448:
case 3634:
case 2477:
case 2266:
case 290:
case 3740:
case 2311:
case 3650:
case 3594:
case 219:
case 2340:
case 3050:
case 1236:
case 818:
case 3503:
case 3162:
case 2905:
case 2890:
case 2182:
case 1776:
case 4082:
case 72:
case 1084:
case 3499:
case 987:
case 448:
case 594:
case 710:
case 3935:
case 1785:
case 2669:
case 1220:
case 198:
case 2817:
case 1599:
case 734:
case 3689:
case 327:
case 3089:
case 1494:
case 565:
case 2021:
case 1403:
case 1257:
case 505:
case 2621:
case 1992:
case 779:
case 3735:
case 2093:
case 1985:
case 997:
case 3154:
case 2917:
case 1342:
case 393:
case 666:
case 178:
case 188:
case 233:
case 3753:
case 3853:
case 1639:
case 539:
case 1892:
case 799:
case 2638:
case 954:
case 3269:
case 1797:
case 1897:
case 1131:
case 2519:
case 3978:
case 3221:
case 1347:
case 2378:
case 267:
case 1606:
case 207:
case 1107:
case 3425:
case 1997:
case 1252:
case 3204:
case 2496:
case 557:
case 1470:
case 3778:
case 871:
case 2129:
case 1613:
case 3238:
case 2712:
case 342:
case 4061:
case 43:
case 2161:
case 152:
case 1115:
case 1741:
case 2774:
case 2187:
case 3622:
case 3022:
case 3167:
case 2173:
case 960:
case 1941:
case 2472:
case 56:
case 111:
case 1525:
case 1323:
case 2250:
case 3374:
case 2227:
case 3418:
case 847:
case 1546:
case 1311:
case 1477:
case 440:
case 718:
case 3132:
case 1990:
case 1449:
case 1805:
case 1195:
case 1544:
case 2571:
case 3609:
case 3009:
case 3455:
case 2084:
case 1905:
case 3251:
case 1100:
case 2236:
case 1340:
case 119:
case 2992:
case 3865:
case 1621:
case 3765:
case 3688:
case 338:
case 603:
case 2599:
case 1555:
case 1817:
case 1717:
case 298:
case 1669:
case 1353:
case 2785:
case 2668:
case 3392:
case 899:
case 3385:
case 2892:
case 3583:
case 3965:
case 1038:
case 3942:
case 376:
case 2039:
case 3652:
case 288:
case 2416:
case 659:
case 3052:
case 2342:
case 1604:
case 155:
case 2365:
case 879:
case 889:
case 3160:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751576402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,];
var gg_b = "1751576402/";

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
