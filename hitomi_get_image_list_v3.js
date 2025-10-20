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
case 1896:
case 30:
case 3282:
case 599:
case 3406:
case 472:
case 960:
case 1051:
case 347:
case 4081:
case 2661:
case 828:
case 1608:
case 845:
case 1517:
case 1235:
case 2874:
case 2916:
case 2633:
case 3511:
case 870:
case 2313:
case 3582:
case 3748:
case 4:
case 2877:
case 1473:
case 3659:
case 4029:
case 1535:
case 3057:
case 94:
case 3030:
case 757:
case 3358:
case 194:
case 2993:
case 3500:
case 3907:
case 2029:
case 615:
case 1106:
case 2:
case 2199:
case 2273:
case 3599:
case 3904:
case 1374:
case 3943:
case 2325:
case 3200:
case 1309:
case 3979:
case 2081:
case 727:
case 2573:
case 3299:
case 2414:
case 1901:
case 3371:
case 799:
case 2549:
case 576:
case 3865:
case 3149:
case 1390:
case 2968:
case 1598:
case 2367:
case 39:
case 2688:
case 4068:
case 1010:
case 3250:
case 2016:
case 1263:
case 512:
case 3954:
case 216:
case 3515:
case 3480:
case 1359:
case 3342:
case 1821:
case 1148:
case 2364:
case 1298:
case 233:
case 3234:
case 3824:
case 914:
case 326:
case 2137:
case 1978:
case 4093:
case 3308:
case 3930:
case 1055:
case 929:
case 242:
case 1563:
case 3957:
case 3007:
case 3609:
case 1905:
case 3375:
case 2093:
case 3674:
case 461:
case 875:
case 183:
case 2085:
case 2186:
case 3523:
case 3586:
case 2321:
case 86:
case 3079:
case 3677:
case 2859:
case 3043:
case 840:
case 97:
case 689:
case 3833:
case 152:
case 2463:
case 3456:
case 1867:
case 709:
case 1892:
case 2389:
case 1085:
case 222:
case 949:
case 3696:
case 3799:
case 2180:
case 3434:
case 3580:
case 3987:
case 1123:
case 526:
case 3842:
case 884:
case 3700:
case 1929:
case 3808:
case 777:
case 1431:
case 3625:
case 1093:
case 204:
case 3324:
case 1068:
case 2749:
case 3280:
case 2646:
case 1389:
case 2892:
case 3450:
case 312:
case 252:
case 2001:
case 1981:
case 1859:
case 59:
case 3327:
case 1912:
case 2658:
case 3028:
case 2359:
case 3202:
case 1115:
case 116:
case 3423:
case 1392:
case 2951:
case 2889:
case 1367:
case 452:
case 4001:
case 2598:
case 3333:
case 1688:
case 639:
case 2531:
case 3613:
case 756:
case 2055:
case 878:
case 1137:
case 2978:
case 2102:
case 3875:
case 577:
case 3502:
case 3936:
case 1714:
case 142:
case 3361:
case 2821:
case 3969:
case 483:
case 2298:
case 422:
case 161:
case 1249:
case 1:
case 92:
case 1273:
case 1199:
case 2813:
case 1417:
case 3552:
case 1993:
case 2152:
case 4078:
case 2005:
case 1627:
case 3506:
case 3932:
case 2377:
case 825:
case 172:
case 1435:
case 1573:
case 2901:
case 1968:
case 95:
case 3084:
case 547:
case 2390:
case 1396:
case 848:
case 2675:
case 2374:
case 601:
case 1081:
case 50:
case 3252:
case 2309:
case 1012:
case 376:
case 70:
case 3715:
case 1809:
case 1916:
case 3928:
case 2235:
case 2910:
case 979:
case 3117:
case 3664:
case 1890:
case 331:
case 747:
case 2051:
case 3871:
case 1763:
case 3135:
case 2535:
case 3114:
case 3750:
case 2473:
case 1877:
case 2955:
case 2078:
case 494:
case 3737:
case 4005:
case 2449:
case 3858:
case 1111:
case 1313:
case 1633:
case 618:
case 3667:
case 3069:
case 76:
case 2403:
case 1807:
case 1061:
case 998:
case 2222:
case 384:
case 3462:
case 3064:
case 846:
case 303:
case 2651:
case 410:
case 534:
case 3494:
case 2678:
case 2447:
case 1843:
case 3739:
case 3636:
case 3316:
case 812:
case 3067:
case 932:
case 1438:
case 3766:
case 3470:
case 3092:
case 3669:
case 1503:
case 616:
case 3687:
case 1544:
case 3089:
case 3996:
case 1419:
case 1197:
case 3368:
case 320:
case 2343:
case 3541:
case 3276:
case 2304:
case 3718:
case 1783:
case 2291:
case 1629:
case 734:
case 350:
case 1547:
case 2946:
case 1024:
case 2958:
case 3855:
case 2591:
case 633:
case 1170:
case 2538:
case 3138:
case 3241:
case 1616:
case 570:
case 2330:
case 2908:
case 1719:
case 2610:
case 1961:
case 908:
case 1495:
case 6:
case 1369:
case 215:
case 1426:
case 2887:
case 3013:
case 558:
case 3964:
case 1088:
case 393:
case 4046:
case 857:
case 3260:
case 2655:
case 464:
case 672:
case 3967:
case 3992:
case 1166:
case 1553:
case 348:
case 325:
case 1065:
case 911:
case 1685:
case 3797:
case 43:
case 18:
case 2595:
case 863:
case 1520:
case 1927:
case 2526:
case 3183:
case 3126:
case 1118:
case 1040:
case 973:
case 2295:
case 2747:
case 758:
case 3439:
case 2145:
case 3794:
case 3545:
case 2869:
case 2601:
case 1387:
case 3329:
case 2453:
case 3466:
case 3770:
case 1924:
case 2836:
case 1830:
case 770:
case 1220:
case 3878:
case 1583:
case 2118:
case 525:
case 1526:
case 2520:
case 3009:
case 3120:
case 3741:
case 847:
case 164:
case 2854:
case 328:
case 28:
case 4065:
case 3472:
case 1744:
case 1703:
case 1595:
case 80:
case 358:
case 2857:
case 1453:
case 3460:
case 3643:
case 2830:
case 3305:
case 1836:
case 2924:
case 4088:
case 2040:
case 1601:
case 569:
case 2483:
case 1887:
case 2426:
case 115:
case 2253:
case 2719:
case 755:
case 1330:
case 1908:
case 2336:
case 2616:
case 2495:
case 2961:
case 617:
case 3829:
case 3566:
case 2166:
case 3351:
case 3153:
case 881:
case 13:
case 2933:
case 201:
case 3539:
case 2139:
case 1354:
case 1655:
case 3445:
case 1238:
case 3270:
case 1605:
case 1304:
case 3974:
case 1141:
case 1343:
case 1291:
case 2027:
case 2726:
case 2544:
case 3103:
case 2795:
case 982:
case 1971:
case 4033:
case 2197:
case 2419:
case 1075:
case 334:
case 750:
case 2024:
case 1176:
case 3977:
case 2681:
case 826:
case 2170:
case 1538:
case 584:
case 2194:
case 110:
case 2203:
case 778:
case 3147:
case 2547:
case 578:
case 3885:
case 3441:
case 877:
case 604:
case 2988:
case 1042:
case 784:
case 1832:
case 703:
case 2061:
case 3893:
case 622:
case 550:
case 3654:
case 1519:
case 4024:
case 3868:
case 2033:
case 291:
case 967:
case 3760:
case 3059:
case 4027:
case 652:
case 340:
case 2328:
case 189:
case 2804:
case 2843:
case 3310:
case 121:
case 970:
case 2698:
case 287:
case 3409:
case 766:
case 2113:
case 2311:
case 508:
case 3490:
case 2852:
case 2919:
case 1708:
case 3072:
case 958:
case 1471:
case 773:
case 3213:
case 4095:
case 1288:
case 3477:
case 1458:
case 151:
case 1446:
case 3602:
case 2922:
case 2440:
case 2663:
case 3656:
case 4083:
case 4026:
case 2083:
case 2727:
case 2258:
case 1020:
case 61:
case 2125:
case 1174:
case 2488:
case 1190:
case 2196:
case 3596:
case 2095:
case 3680:
case 2246:
case 1306:
case 3225:
case 2938:
case 2300:
case 2724:
case 1352:
case 2546:
case 708:
case 2271:
case 3146:
case 2399:
case 566:
case 1540:
case 3296:
case 262:
case 213:
case 3267:
case 353:
case 2164:
case 598:
case 2880:
case 1233:
case 2427:
case 1823:
case 1886:
case 814:
case 630:
case 1561:
case 4038:
case 1356:
case 4091:
case 2337:
case 829:
case 2508:
case 2019:
case 1302:
case 3972:
case 271:
case 2242:
case 2424:
case 1475:
case 2192:
case 3592:
case 323:
case 2167:
case 3960:
case 1159:
case 2614:
case 859:
case 2315:
case 2208:
case 2635:
case 1261:
case 2022:
case 3774:
case 3652:
case 3041:
case 732:
case 3709:
case 1224:
case 2275:
case 2926:
case 1527:
case 940:
case 1442:
case 436:
case 186:
case 2995:
case 367:
case 743:
case 3898:
case 2461:
case 1044:
case 1003:
case 3831:
case 3221:
case 471:
case 1758:
case 2433:
case 1837:
case 2091:
case 1227:
case 4019:
case 1524:
case 1850:
case 3076:
case 1380:
case 1673:
case 2323:
case 3945:
case 975:
case 300:
case 413:
case 2740:
case 96:
case 1746:
case 1047:
case 332:
case 2044:
case 1189:
case 2408:
case 3097:
case 3464:
case 582:
case 343:
case 3725:
case 523:
case 767:
case 806:
case 286:
case 3127:
case 2920:
case 3918:
case 2834:
case 2224:
case 1386:
case 849:
case 1323:
case 2673:
case 3094:
case 2380:
case 2047:
case 2746:
case 1740:
case 2649:
case 700:
case 2227:
case 2758:
case 1038:
case 1856:
case 3070:
case 553:
case 680:
case 398:
case 2850:
case 3363:
case 978:
case 2561:
case 3489:
case 753:
case 1019:
case 500:
case 795:
case 1164:
case 4047:
case 3713:
case 1788:
case 2886:
case 1542:
case 950:
case 1880:
case 3421:
case 602:
case 1614:
case 3559:
case 2159:
case 723:
case 782:
case 2261:
case 1242:
case 920:
case 3611:
case 2533:
case 3331:
case 3133:
case 4003:
case 1167:
case 4044:
case 2953:
case 3962:
case 925:
case 1196:
case 1246:
case 3789:
case 2944:
case 1095:
case 3623:
case 948:
case 2240:
case 3686:
case 2109:
case 3509:
case 2020:
case 1258:
case 3574:
case 3413:
case 2174:
case 1488:
case 1125:
case 896:
case 2947:
case 2811:
case 3140:
case 82:
case 1271:
case 1546:
case 3994:
case 3721:
case 162:
case 421:
case 2177:
case 1300:
case 3970:
case 3274:
case 2306:
case 790:
case 505:
case 1465:
case 2352:
case 1724:
case 3209:
case 590:
case 2471:
case 3634:
case 2800:
case 3615:
case 366:
case 1806:
case 3335:
case 187:
case 437:
case 2265:
case 1698:
case 638:
case 2742:
case 221:
case 373:
case 1631:
case 3188:
case 1311:
case 1113:
case 3764:
case 1440:
case 3039:
case 692:
case 3650:
case 4020:
case 1663:
case 3792:
case 3767:
case 2053:
case 3165:
case 251:
case 1733:
case 2565:
case 311:
case 3849:
case 1128:
case 1485:
case 765:
case 3322:
case 1510:
case 3034:
case 3015:
case 77:
case 3432:
case 3803:
case 912:
case 3844:
case 1098:
case 2897:
case 1468:
case 3639:
case 2778:
case 1876:
case 2216:
case 1063:
case 1914:
case 2894:
case 180:
case 2653:
case 3666:
case 349:
case 2585:
case 3999:
case 1201:
case 1416:
case 3185:
case 1394:
case 230:
case 3086:
case 2268:
case 714:
case 3023:
case 1132:
case 2620:
case 1683:
case 3338:
case 3618:
case 1370:
case 3193:
case 2593:
case 154:
case 797:
case 3168:
case 3784:
case 2949:
case 759:
case 2285:
case 636:
case 57:
case 1712:
case 1781:
case 2179:
case 119:
case 671:
case 2104:
case 3504:
case 2818:
case 3487:
case 3934:
case 396:
case 3915:
case 3230:
case 1619:
case 1339:
case 560:
case 1716:
case 3728:
case 21:
case 1931:
case 4049:
case 2405:
case 1366:
case 2360:
case 1429:
case 4073:
case 2157:
case 3557:
case 288:
case 1035:
case 3254:
case 1014:
case 3484:
case 507:
case 3530:
case 641:
case 1251:
case 1845:
case 2644:
case 2603:
case 74:
case 3099:
case 3697:
case 1785:
case 2212:
case 1872:
case 1793:
case 2281:
case 866:
case 707:
case 2451:
case 138:
case 3000:
case 3129:
case 811:
case 3853:
case 192:
case 2073:
case 3694:
case 41:
case 2478:
case 1184:
case 2839:
case 760:
case 1691:
case 2581:
case 1205:
case 3383:
case 1638:
case 976:
case 1281:
case 2793:
case 34:
case 1212:
case 4014:
case 4035:
case 3006:
case 1451:
case 307:
case 3284:
case 1603:
case 3980:
case 2187:
case 805:
case 2785:
case 3454:
case 651:
case 4017:
case 1229:
case 1839:
case 3743:
case 3320:
case 3676:
case 55:
case 947:
case 1581:
case 2318:
case 2205:
case 292:
case 2860:
case 3457:
case 1049:
case 3287:
case 1478:
case 2184:
case 596:
case 1647:
case 1405:
case 492:
case 2429:
case 2551:
case 579:
case 2278:
case 3883:
case 1818:
case 2619:
case 1710:
case 890:
case 3569:
case 2845:
case 2412:
case 135:
case 637:
case 2963:
case 438:
case 188:
case 3902:
case 3536:
case 72:
case 2136:
case 2622:
case 2578:
case 3178:
case 1107:
case 329:
case 2683:
case 4063:
case 3532:
case 2729:
case 1620:
case 2132:
case 254:
case 1705:
case 895:
case 1410:
case 2201:
case 1268:
case 2695:
case 397:
case 480:
case 130:
case 853:
case 956:
case 2781:
case 1293:
case 2712:
case 1341:
case 3822:
case 219:
case 882:
case 1973:
case 2501:
case 3344:
case 2098:
case 686:
case 1751:
case 37:
case 2031:
case 1897:
case 2493:
case 3110:
case 2510:
case 2917:
case 1516:
case 3672:
case 3528:
case 419:
case 2485:
case 2255:
case 280:
case 1894:
case 977:
case 800:
case 3002:
case 3730:
case 3891:
case 2468:
case 2555:
case 1401:
case 1870:
case 3056:
case 1216:
case 3838:
case 2935:
case 2876:
case 338:
case 2006:
case 1732:
case 1129:
case 2641:
case 24:
case 2105:
case 535:
case 3872:
case 1662:
case 2454:
case 588:
case 3785:
case 1697:
case 774:
case 666:
case 1986:
case 2779:
case 1326:
case 1670:
case 3205:
case 1181:
case 3638:
case 1383:
case 2320:
case 611:
case 2584:
case 3184:
case 3768:
case 1436:
case 1853:
case 3551:
case 2353:
case 3366:
case 3998:
case 15:
case 3931:
case 3619:
case 3339:
case 3017:
case 1728:
case 3716:
case 2236:
case 71:
case 2826:
case 1487:
case 2883:
case 1934:
case 608:
case 9:
case 1082:
case 788:
case 1011:
case 4052:
case 735:
case 3622:
case 44:
case 3136:
case 2902:
case 4006:
case 1950:
case 3963:
case 3014:
case 1193:
case 2952:
case 1279:
case 214:
case 1204:
case 2906:
case 1338:
case 942:
case 3370:
case 4048:
case 2080:
case 1787:
case 813:
case 297:
case 3695:
case 1023:
case 1428:
case 1185:
case 259:
case 1543:
case 544:
case 3712:
case 3781:
case 168:
case 2645:
case 2101:
case 465:
case 2303:
case 302:
case 3501:
case 47:
case 3493:
case 643:
case 1432:
case 1844:
case 3098:
case 632:
case 3255:
case 459:
case 2672:
case 2528:
case 3917:
case 2110:
case 3841:
case 1982:
case 1847:
case 2048:
case 698:
case 2660:
case 4080:
case 1769:
case 1666:
case 380:
case 497:
case 3876:
case 1050:
case 3210:
case 2228:
case 2056:
case 2838:
case 429:
case 2891:
case 3555:
case 3468:
case 1736:
case 530:
case 414:
case 1319:
case 2015:
case 206:
case 468:
case 667:
case 1110:
case 1754:
case 2322:
case 502:
case 886:
case 2116:
case 17:
case 524:
case 344:
case 3897:
case 165:
case 2803:
case 952:
case 2432:
case 3401:
case 3870:
case 600:
case 1228:
case 1056:
case 904:
case 2639:
case 1730:
case 780:
case 1155:
case 1891:
case 1404:
case 2982:
case 3653:
case 1479:
case 2769:
case 3268:
case 330:
case 1080:
case 449:
case 2185:
case 2999:
case 1819:
case 580:
case 653:
case 2279:
case 1952:
case 4037:
case 3107:
case 2900:
case 129:
case 4050:
case 1532:
case 3376:
case 1101:
case 1303:
case 719:
case 3949:
case 2784:
case 2168:
case 3455:
case 3568:
case 2504:
case 3143:
case 3341:
case 3104:
case 1822:
case 2543:
case 159:
case 623:
case 268:
case 2579:
case 682:
case 2257:
case 3154:
case 3710:
case 2554:
case 592:
case 2915:
case 1883:
case 2487:
case 1236:
case 3360:
case 1151:
case 3405:
case 25:
case 1269:
case 1536:
case 994:
case 1902:
case 3755:
case 585:
case 3130:
case 2530:
case 2937:
case 2254:
case 690:
case 1956:
case 4000:
case 388:
case 335:
case 2011:
case 538:
case 837:
case 2082:
case 4011:
case 738:
case 4082:
case 2923:
case 2986:
case 3603:
case 1587:
case 2129:
case 2732:
case 3451:
case 1105:
case 785:
case 1641:
case 374:
case 3049:
case 2436:
case 1287:
case 3478:
case 1584:
case 3073:
case 2694:
case 160:
case 3866:
case 1457:
case 851:
case 3512:
case 2112:
case 2181:
case 3581:
case 1779:
case 792:
case 279:
case 3229:
case 536:
case 2097:
case 1831:
case 3408:
case 1790:
case 2062:
case 2699:
case 1589:
case 167:
case 3044:
case 3003:
case 3834:
case 1709:
case 3224:
case 2918:
case 3442:
case 3920:
case 3527:
case 1606:
case 386:
case 243:
case 2464:
case 67:
case 1289:
case 3746:
case 3047:
case 1459:
case 1777:
case 298:
case 1076:
case 2070:
case 513:
case 2124:
case 3302:
case 1972:
case 713:
case 3561:
case 2161:
case 697:
case 195:
case 3823:
case 3233:
case 629:
case 1142:
case 3886:
case 910:
case 153:
case 830:
case 1292:
case 1564:
case 2939:
case 443:
case 2398:
case 432:
case 1567:
case 2133:
case 2331:
case 2611:
case 659:
case 3533:
case 4062:
case 3475:
case 736:
case 2686:
case 2623:
case 3944:
case 1373:
case 2789:
case 1680:
case 81:
case 2277:
case 3174:
case 2018:
case 2509:
case 1296:
case 1045:
case 741:
case 1146:
case 3811:
case 835:
case 473:
case 3947:
case 3540:
case 3775:
case 587:
case 762:
case 208:
case 2274:
case 2970:
case 1814:
case 3177:
case 266:
case 408:
case 2615:
case 2634:
case 3800:
case 1490:
case 562:
case 787:
case 3899:
case 64:
case 3588:
case 2425:
case 273:
case 2188:
case 1513:
case 3742:
case 541:
case 105:
case 1409:
case 4018:
case 1759:
case 2650:
case 2039:
case 1602:
case 964:
case 2637:
case 2317:
case 3565:
case 211:
case 2165:
case 1213:
case 3288:
case 2767:
case 2792:
case 2513:
case 1188:
case 2474:
case 173:
case 3311:
case 3113:
case 3698:
case 1314:
case 1615:
case 3761:
case 3806:
case 1496:
case 3852:
case 537:
case 2490:
case 3733:
case 679:
case 111:
case 2060:
case 1792:
case 1873:
case 1767:
case 2213:
case 1650:
case 2656:
case 1317:
case 2602:
case 1039:
case 2817:
case 3125:
case 1277:
case 65:
case 1018:
case 3026:
case 3571:
case 2680:
case 3246:
case 696:
case 2171:
case 3095:
case 1623:
case 1686:
case 2349:
case 901:
case 1997:
case 341:
case 2158:
case 521:
case 737:
case 3300:
case 1970:
case 62:
case 2814:
case 2835:
case 2225:
case 290:
case 2045:
case 362:
case 2146:
case 3399:
case 3271:
case 2142:
case 3427:
case 2292:
case 253:
case 313:
case 2267:
case 3788:
case 3337:
case 3617:
case 4076:
case 854:
case 1489:
case 3350:
case 2567:
case 282:
case 223:
case 3192:
case 3424:
case 371:
case 1611:
case 586:
case 1331:
case 824:
case 939:
case 819:
case 3208:
case 3614:
case 1559:
case 3334:
case 1127:
case 2606:
case 1600:
case 3275:
case 3983:
case 2041:
case 2774:
case 786:
case 1699:
case 991:
case 1062:
case 2790:
case 2221:
case 1097:
case 2589:
case 267:
case 2863:
case 3856:
case 1070:
case 1492:
case 2175:
case 3802:
case 649:
case 3433:
case 3091:
case 2289:
case 200:
case 3121:
case 1094:
case 3848:
case 495:
case 663:
case 631:
case 3854:
case 2741:
case 53:
case 2120:
case 2009:
case 1312:
case 1183:
case 2518:
case 1381:
case 1126:
case 676:
case 764:
case 1195:
case 2472:
case 1096:
case 1797:
case 3685:
case 1245:
case 3384:
case 3791:
case 3924:
case 169:
case 2305:
case 3830:
case 2643:
case 1878:
case 1329:
case 2460:
case 2077:
case 318:
case 1770:
case 3857:
case 2679:
case 987:
case 1921:
case 1545:
case 3387:
case 3040:
case 3668:
case 1964:
case 1260:
case 3369:
case 3426:
case 1418:
case 962:
case 2239:
case 657:
case 3961:
case 3616:
case 1628:
case 3336:
case 2378:
case 699:
case 4090:
case 1560:
case 564:
case 2351:
case 1992:
case 2566:
case 148:
case 4009:
case 2959:
case 445:
case 4074:
case 428:
case 3722:
case 2539:
case 1718:
case 936:
case 3027:
case 3783:
case 1810:
case 1276:
case 1541:
case 2270:
case 2816:
case 339:
case 1368:
case 2597:
case 3795:
case 3503:
case 1687:
case 3544:
case 2103:
case 1089:
case 3170:
case 1138:
case 3681:
case 3612:
case 1576:
case 710:
case 1855:
case 842:
case 3940:
case 3547:
case 1684:
case 2147:
case 913:
case 1385:
case 1021:
case 833:
case 150:
case 861:
case 475:
case 2594:
case 2745:
case 1913:
case 26:
case 103:
case 2885:
case 434:
case 184:
case 2654:
case 2355:
case 510:
case 1497:
case 646:
case 3438:
case 1801:
case 1470:
case 1669:
case 391:
case 2868:
case 2310:
case 2630:
case 1636:
case 3328:
case 612:
case 2059:
case 1772:
case 2462:
case 3519:
case 284:
case 3832:
case 3222:
case 677:
case 478:
case 3403:
case 3651:
case 175:
case 3042:
case 4021:
case 883:
case 450:
case 822:
case 203:
case 2913:
case 389:
case 2316:
case 2636:
case 1630:
case 1310:
case 3219:
case 986:
case 140:
case 791:
case 4089:
case 2669:
case 2766:
case 3753:
case 2470:
case 2067:
case 420:
case 1868:
case 1294:
case 2996:
case 739:
case 4092:
case 2687:
case 591:
case 1909:
case 3828:
case 3238:
case 69:
case 1270:
case 2541:
case 3304:
case 2925:
case 2810:
case 3946:
case 403:
case 2684:
case 1594:
case 310:
case 2021:
case 3176:
case 2241:
case 2138:
case 1570:
case 3307:
case 2191:
case 2855:
case 3591:
case 3958:
case 3075:
case 134:
case 894:
case 1829:
case 1378:
case 3908:
case 2572:
case 2260:
case 817:
case 2964:
case 1266:
case 2013:
case 3887:
case 2418:
case 3942:
case 1959:
case 1881:
case 1812:
case 701:
case 58:
case 1539:
case 33:
case 3884:
case 225:
case 1566:
case 248:
case 2992:
case 1153:
case 3160:
case 2967:
case 2851:
case 3595:
case 647:
case 3071:
case 2797:
case 1472:
case 364:
case 1741:
case 1074:
case 501:
case 3583:
case 1009:
case 2312:
case 455:
case 170:
case 3601:
case 921:
case 2545:
case 3869:
case 2921:
case 3046:
case 2439:
case 3747:
case 3295:
case 4013:
case 2878:
case 1643:
case 1305:
case 3836:
case 3283:
case 158:
case 3453:
case 1679:
case 2770:
case 2329:
case 1523:
case 2415:
case 1586:
case 246:
case 177:
case 2434:
case 2580:
case 3864:
case 2799:
case 1690:
case 2696:
case 322:
case 66:
case 3905:
case 304:
case 1375:
case 2625:
case 1706:
case 561:
case 1007:
case 675:
case 1609:
case 2700:
case 352:
case 3867:
case 2450:
case 3773:
case 3892:
case 1402:
case 944:
case 2280:
case 1286:
case 1833:
case 2984:
case 209:
case 1237:
case 2423:
case 1827:
case 156:
case 1480:
case 2202:
case 1250:
case 3010:
case 2028:
case 2256:
case 1954:
case 716:
case 19:
case 2613:
case 2131:
case 3889:
case 3951:
case 2163:
case 2361:
case 2556:
case 1957:
case 4032:
case 2936:
case 2875:
case 3978:
case 1308:
case 1537:
case 742:
case 810:
case 2969:
case 930:
case 3231:
case 446:
case 2548:
case 815:
case 3813:
case 4069:
case 1780:
case 257:
case 317:
case 2087:
case 2723:
case 1500:
case 2506:
case 3106:
case 1358:
case 4036:
case 394:
case 7:
case 2552:
case 431:
case 91:
case 3390:
case 227:
case 2084:
case 1299:
case 1371:
case 2621:
case 1904:
case 2206:
case 772:
case 1200:
case 299:
case 3675:
case 2482:
case 2117:
case 3608:
case 3517:
case 3235:
case 3825:
case 2928:
case 147:
case 2715:
case 1282:
case 2871:
case 2400:
case 1406:
case 645:
case 628:
case 2365:
case 10:
case 2036:
case 5:
case 3449:
case 2858:
case 3078:
case 1702:
case 1030:
case 3955:
case 3473:
case 3217:
case 2069:
case 1748:
case 2667:
case 4087:
case 1511:
case 2406:
case 1871:
case 1400:
case 992:
case 2282:
case 2452:
case 3890:
case 20:
case 131:
case 163:
case 1365:
case 1499:
case 1928:
case 3874:
case 176:
case 3661:
case 1734:
case 594:
case 1667:
case 1069:
case 2582:
case 1846:
case 1388:
case 3633:
case 2030:
case 2702:
case 818:
case 1737:
case 1036:
case 938:
case 2756:
case 2057:
case 2659:
case 3877:
case 1750:
case 1506:
case 2907:
case 1552:
case 4030:
case 3273:
case 3199:
case 2346:
case 3417:
case 1340:
case 3:
case 3249:
case 1786:
case 1723:
case 1689:
case 157:
case 648:
case 3081:
case 2979:
case 447:
case 3012:
case 2200:
case 3624:
case 1206:
case 2904:
case 1411:
case 801:
case 1621:
case 3435:
case 2371:
case 3573:
case 2299:
case 3688:
case 1613:
case 1248:
case 1198:
case 924:
case 2480:
case 256:
case 2827:
case 316:
case 839:
case 2954:
case 552:
case 3016:
case 1256:
case 919:
case 4043:
case 1782:
case 1548:
case 477:
case 678:
case 2342:
case 1969:
case 3714:
case 1556:
case 522:
case 650:
case 1361:
case 3735:
case 2537:
case 1875:
case 1502:
case 954:
case 1625:
case 3431:
case 1324:
case 2375:
case 783:
case 722:
case 1032:
case 3498:
case 2861:
case 1434:
case 1580:
case 277:
case 2586:
case 146:
case 704:
case 1842:
case 1415:
case 1696:
case 2690:
case 1799:
case 684:
case 109:
case 2043:
case 752:
case 2004:
case 2677:
case 2448:
case 456:
case 2079:
case 0:
case 1327:
case 3912:
case 1450:
case 2456:
case 2223:
case 1437:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761001201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,];
var gg_b = "1761001201/";

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
