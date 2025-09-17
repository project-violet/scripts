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
case 766:
case 1264:
case 2746:
case 608:
case 692:
case 2635:
case 3074:
case 1578:
case 2373:
case 899:
case 2597:
case 248:
case 954:
case 2887:
case 2958:
case 1695:
case 2036:
case 484:
case 1454:
case 12:
case 1098:
case 3884:
case 2683:
case 3819:
case 3042:
case 2439:
case 3845:
case 1576:
case 352:
case 1403:
case 1767:
case 906:
case 3346:
case 2232:
case 3559:
case 3773:
case 2273:
case 1884:
case 1594:
case 3454:
case 3576:
case 3292:
case 3108:
case 1042:
case 1819:
case 2792:
case 968:
case 1845:
case 3499:
case 830:
case 787:
case 2021:
case 1732:
case 3403:
case 2063:
case 3767:
case 1346:
case 2981:
case 1773:
case 3264:
case 820:
case 2152:
case 1246:
case 3106:
case 2829:
case 3578:
case 58:
case 251:
case 519:
case 792:
case 2543:
case 1011:
case 708:
case 3690:
case 1991:
case 1834:
case 2122:
case 2859:
case 963:
case 1647:
case 3609:
case 3201:
case 2545:
case 3916:
case 1141:
case 216:
case 3424:
case 155:
case 3587:
case 3897:
case 1417:
case 2051:
case 3918:
case 181:
case 3405:
case 2065:
case 3400:
case 1775:
case 703:
case 1424:
case 2644:
case 603:
case 3112:
case 1897:
case 3843:
case 243:
case 3770:
case 3417:
case 2878:
case 2086:
case 4041:
case 2370:
case 2414:
case 2672:
case 4012:
case 695:
case 2633:
case 2375:
case 1609:
case 2282:
case 1916:
case 3782:
case 1693:
case 2876:
case 2088:
case 3141:
case 1383:
case 4023:
case 3790:
case 2898:
case 911:
case 3795:
case 1235:
case 3821:
case 415:
case 1877:
case 1838:
case 393:
case 2917:
case 3426:
case 2664:
case 230:
case 3155:
case 2586:
case 3123:
case 3989:
case 565:
case 2896:
case 3161:
case 1632:
case 3150:
case 3029:
case 3667:
case 2491:
case 3914:
case 2390:
case 3971:
case 87:
case 305:
case 1087:
case 1836:
case 3428:
case 653:
case 26:
case 1161:
case 423:
case 753:
case 1989:
case 1123:
case 1029:
case 1150:
case 1667:
case 1914:
case 3330:
case 2565:
case 105:
case 3431:
case 2811:
case 3283:
case 3927:
case 2416:
case 2648:
case 3836:
case 1790:
case 848:
case 2084:
case 3383:
case 2924:
case 2842:
case 2019:
case 433:
case 2900:
case 1863:
case 776:
case 347:
case 214:
case 2905:
case 3838:
case 2646:
case 641:
case 3479:
case 428:
case 789:
case 758:
case 2247:
case 3344:
case 1709:
case 1366:
case 2043:
case 2733:
case 1851:
case 3078:
case 1865:
case 467:
case 1574:
case 3481:
case 1860:
case 3596:
case 1456:
case 3886:
case 2772:
case 2903:
case 71:
case 1268:
case 517:
case 2034:
case 664:
case 1125:
case 1153:
case 3372:
case 1120:
case 1368:
case 3670:
case 2563:
case 2785:
case 1104:
case 1542:
case 1458:
case 198:
case 3957:
case 1266:
case 1094:
case 2538:
case 2577:
case 1333:
case 3153:
case 1675:
case 956:
case 1372:
case 1285:
case 3542:
case 398:
case 1888:
case 2766:
case 1244:
case 882:
case 1385:
case 4025:
case 3939:
case 4053:
case 1479:
case 61:
case 2097:
case 1747:
case 3511:
case 2209:
case 3793:
case 4020:
case 1344:
case 4004:
case 1233:
case 3865:
case 3062:
case 1481:
case 1037:
case 1078:
case 973:
case 412:
case 1886:
case 658:
case 1596:
case 3456:
case 2030:
case 2873:
case 668:
case 1696:
case 2832:
case 100:
case 1124:
case 1582:
case 627:
case 2501:
case 1100:
case 3245:
case 2719:
case 1892:
case 434:
case 2636:
case 1090:
case 2740:
case 18:
case 3284:
case 2387:
case 213:
case 3319:
case 424:
case 3787:
case 175:
case 3642:
case 2950:
case 2083:
case 2287:
case 3340:
case 3441:
case 1570:
case 1729:
case 552:
case 1864:
case 1575:
case 992:
case 1319:
case 4024:
case 1340:
case 2422:
case 375:
case 1787:
case 1642:
case 410:
case 908:
case 2663:
case 3729:
case 4005:
case 880:
case 2127:
case 1846:
case 3913:
case 3124:
case 457:
case 246:
case 300:
case 1674:
case 1611:
case 1219:
case 1245:
case 38:
case 3105:
case 1284:
case 235:
case 560:
case 1240:
case 3949:
case 2068:
case 3154:
case 3910:
case 2262:
case 121:
case 1737:
case 1047:
case 2797:
case 974:
case 2394:
case 3009:
case 232:
case 3103:
case 3199:
case 3794:
case 1343:
case 2548:
case 2066:
case 222:
case 3801:
case 491:
case 3759:
case 3532:
case 2665:
case 4003:
case 3573:
case 2362:
case 549:
case 763:
case 131:
case 1397:
case 844:
case 663:
case 1794:
case 2925:
case 581:
case 2276:
case 2592:
case 1532:
case 2904:
case 555:
case 2734:
case 3234:
case 2378:
case 1949:
case 1408:
case 2139:
case 2564:
case 861:
case 321:
case 3737:
case 271:
case 3334:
case 1910:
case 2278:
case 1009:
case 3243:
case 1093:
case 2688:
case 1199:
case 570:
case 778:
case 1509:
case 1593:
case 1711:
case 4056:
case 2533:
case 3158:
case 1774:
case 3796:
case 2296:
case 3321:
case 2572:
case 3404:
case 846:
case 1238:
case 1277:
case 505:
case 1073:
case 1830:
case 1835:
case 1179:
case 3221:
case 2763:
case 3067:
case 2407:
case 2585:
case 4058:
case 1336:
case 2895:
case 2092:
case 1742:
case 442:
case 2890:
case 3798:
case 1969:
case 1181:
case 2580:
case 20:
case 3073:
case 2738:
case 3277:
case 3238:
case 1221:
case 1629:
case 1067:
case 2449:
case 3835:
case 611:
case 165:
case 3687:
case 3181:
case 2311:
case 1798:
case 3969:
case 2640:
case 2684:
case 1420:
case 1453:
case 1425:
case 2645:
case 3509:
case 813:
case 2619:
case 4079:
case 3883:
case 3774:
case 2274:
case 3338:
case 1321:
case 483:
case 4081:
case 1404:
case 2046:
case 678:
case 1363:
case 656:
case 3844:
case 3288:
case 1423:
case 1455:
case 3082:
case 2643:
case 3637:
case 1360:
case 1128:
case 1365:
case 871:
case 604:
case 1260:
case 2634:
case 3872:
case 396:
case 1659:
case 818:
case 3070:
case 2413:
case 162:
case 958:
case 244:
case 3388:
case 4:
case 729:
case 1694:
case 673:
case 459:
case 1286:
case 3868:
case 3260:
case 1872:
case 790:
case 3659:
case 436:
case 3126:
case 2583:
case 4028:
case 1388:
case 2809:
case 1676:
case 362:
case 2893:
case 822:
case 3694:
case 1590:
case 2191:
case 1922:
case 1880:
case 964:
case 2697:
case 1595:
case 3455:
case 4026:
case 639:
case 3662:
case 3360:
case 2530:
case 1131:
case 3194:
case 2303:
case 3626:
case 2399:
case 806:
case 3004:
case 3159:
case 3020:
case 1339:
case 526:
case 1966:
case 3257:
case 2354:
case 3944:
case 3053:
case 3822:
case 2757:
case 1631:
case 1239:
case 4094:
case 536:
case 1137:
case 3357:
case 402:
case 24:
case 3754:
case 3628:
case 4059:
case 914:
case 2197:
case 1473:
case 3799:
case 386:
case 3703:
case 3972:
case 70:
case 3631:
case 211:
case 2993:
case 1162:
case 2909:
case 2448:
case 3137:
case 3178:
case 1357:
case 780:
case 559:
case 1467:
case 3968:
case 2812:
case 1799:
case 920:
case 1194:
case 827:
case 367:
case 4037:
case 4078:
case 3508:
case 112:
case 3176:
case 1159:
case 1020:
case 1985:
case 1025:
case 1980:
case 278:
case 2134:
case 2569:
case 3966:
case 328:
case 1257:
case 2789:
case 1512:
case 3681:
case 3214:
case 2317:
case 2714:
case 333:
case 115:
case 661:
case 3679:
case 1983:
case 2771:
case 1055:
case 1852:
case 1061:
case 3482:
case 2522:
case 1869:
case 204:
case 1724:
case 2995:
case 1658:
case 1327:
case 2145:
case 2119:
case 863:
case 644:
case 3389:
case 1935:
case 1700:
case 273:
case 3314:
case 2217:
case 1705:
case 3470:
case 1541:
case 3869:
case 1371:
case 2224:
case 3327:
case 2808:
case 1389:
case 4029:
case 542:
case 123:
case 3541:
case 1717:
case 1470:
case 1314:
case 3512:
case 1681:
case 2602:
case 2300:
case 493:
case 2305:
case 3983:
case 239:
case 1679:
case 1482:
case 2401:
case 3227:
case 3055:
case 3852:
case 268:
case 3316:
case 3561:
case 1490:
case 878:
case 377:
case 1726:
case 3218:
case 2430:
case 140:
case 613:
case 2435:
case 1807:
case 3318:
case 2188:
case 1699:
case 237:
case 481:
case 1654:
case 725:
case 2716:
case 811:
case 2639:
case 2326:
case 3699:
case 3291:
case 1318:
case 3603:
case 1041:
case 625:
case 2228:
case 3654:
case 2820:
case 2982:
case 1901:
case 2853:
case 2022:
case 591:
case 1731:
case 84:
case 3495:
case 2328:
case 1555:
case 1316:
case 1561:
case 646:
case 3490:
case 1550:
case 1810:
case 3391:
case 177:
case 3726:
case 3807:
case 206:
case 1849:
case 3493:
case 1447:
case 2627:
case 184:
case 3409:
case 2069:
case 839:
case 557:
case 3948:
case 2163:
case 1992:
case 1520:
case 1504:
case 771:
case 2468:
case 3756:
case 2702:
case 1781:
case 3202:
case 943:
case 2356:
case 3946:
case 2515:
case 2549:
case 2510:
case 622:
case 3624:
case 2850:
case 75:
case 2855:
case 42:
case 3196:
case 2861:
case 1605:
case 890:
case 3964:
case 2507:
case 873:
case 2381:
case 1600:
case 524:
case 3111:
case 452:
case 1758:
case 1624:
case 722:
case 3174:
case 2485:
case 1196:
case 169:
case 2379:
case 384:
case 1409:
case 732:
case 3553:
case 1493:
case 3447:
case 39:
case 2138:
case 2177:
case 916:
case 3992:
case 3504:
case 2967:
case 2614:
case 856:
case 1198:
case 2433:
case 2689:
case 997:
case 2589:
case 326:
case 3986:
case 2899:
case 1712:
case 276:
case 1965:
case 3604:
case 107:
case 2514:
case 866:
case 3026:
case 3620:
case 620:
case 3322:
case 1170:
case 2571:
case 1839:
case 799:
case 3625:
case 3988:
case 188:
case 2722:
case 345:
case 159:
case 2101:
case 1500:
case 3517:
case 2607:
case 145:
case 3487:
case 76:
case 3:
case 388:
case 3500:
case 2610:
case 136:
case 730:
case 2649:
case 3505:
case 887:
case 2615:
case 4075:
case 3960:
case 2212:
case 307:
case 450:
case 3951:
case 2341:
case 2484:
case 3170:
case 1620:
case 614:
case 2419:
case 3175:
case 2527:
case 892:
case 2817:
case 2148:
case 3478:
case 3437:
case 3081:
case 1462:
case 383:
case 1938:
case 241:
case 1708:
case 3921:
case 3963:
case 1167:
case 2998:
case 533:
case 3173:
case 2443:
case 2557:
case 895:
case 3476:
case 2146:
case 1252:
case 1936:
case 264:
case 1827:
case 523:
case 1706:
case 874:
case 1369:
case 4032:
case 803:
case 1459:
case 2996:
case 3503:
case 2613:
case 4073:
case 3889:
case 3936:
case 2164:
case 3827:
case 2752:
case 3494:
case 465:
case 1554:
case 3706:
case 3058:
case 4067:
case 1814:
case 579:
case 1503:
case 2002:
case 1081:
case 3938:
case 3977:
case 21:
case 2192:
case 3708:
case 3056:
case 2942:
case 3167:
case 1132:
case 1079:
case 3352:
case 3269:
case 3661:
case 2497:
case 258:
case 2306:
case 515:
case 289:
case 208:
case 3411:
case 2994:
case 925:
case 4047:
case 292:
case 1704:
case 648:
case 2185:
case 421:
case 3474:
case 3612:
case 1581:
case 2502:
case 3310:
case 1891:
case 946:
case 431:
case 1099:
case 2749:
case 3147:
case 2477:
case 2438:
case 2710:
case 191:
case 3818:
case 1109:
case 287:
case 3997:
case 3558:
case 935:
case 77:
case 2039:
case 2172:
case 2421:
case 3207:
case 67:
case 1215:
case 2707:
case 2463:
case 1249:
case 2978:
case 1210:
case 3109:
case 853:
case 2826:
case 3193:
case 391:
case 1558:
case 913:
case 2353:
case 3498:
case 3054:
case 3943:
case 2622:
case 2320:
case 3753:
case 2057:
case 1411:
case 3725:
case 651:
case 4009:
case 3579:
case 4093:
case 1816:
case 2220:
case 3496:
case 1556:
case 2204:
case 876:
case 1349:
case 685:
case 1310:
case 3934:
case 266:
case 2223:
case 4090:
case 2255:
case 494:
case 48:
case 3755:
case 2858:
case 2987:
case 134:
case 4095:
case 2250:
case 889:
case 357:
case 1313:
case 682:
case 419:
case 971:
case 2451:
case 3190:
case 3005:
case 1213:
case 3000:
case 2856:
case 743:
case 3195:
case 1528:
case 2323:
case 310:
case 2355:
case 3945:
case 3024:
case 697:
case 3984:
case 1005:
case 203:
case 2713:
case 2591:
case 1195:
case 797:
case 1606:
case 643:
case 864:
case 324:
case 716:
case 274:
case 1984:
case 1723:
case 1755:
case 922:
case 334:
case 2488:
case 1608:
case 3526:
case 2014:
case 2219:
case 4071:
case 2245:
case 677:
case 3719:
case 3745:
case 3784:
case 3636:
case 2848:
case 2284:
case 3387:
case 2240:
case 740:
case 991:
case 3030:
case 1329:
case 4089:
case 3873:
case 548:
case 3035:
case 2412:
case 1867:
case 1663:
case 1621:
case 1229:
case 3638:
case 3677:
case 1127:
case 2319:
case 474:
case 2345:
case 3955:
case 3950:
case 2384:
case 125:
case 3287:
case 57:
case 2570:
case 1171:
case 1677:
case 1923:
case 1961:
case 865:
case 1950:
case 2095:
case 2100:
case 1387:
case 335:
case 28:
case 4027:
case 551:
case 113:
case 1784:
case 1636:
case 219:
case 2913:
case 1832:
case 777:
case 2093:
case 3797:
case 924:
case 4057:
case 1376:
case 79:
case 784:
case 1875:
case 1139:
case 466:
case 3359:
case 3068:
case 2408:
case 2949:
case 582:
case 3546:
case 2154:
case 1278:
case 2910:
case 3262:
case 3651:
case 3259:
case 3665:
case 2759:
case 2532:
case 118:
case 3660:
case 2573:
case 1378:
case 669:
case 1686:
case 1734:
case 1925:
case 15:
case 1044:
case 1080:
case 1953:
case 3294:
case 597:
case 3548:
case 2397:
case 3066:
case 862:
case 934:
case 1276:
case 322:
case 2801:
case 272:
case 1882:
case 1665:
case 3904:
case 2567:
case 1362:
case 231:
case 3734:
case 318:
case 957:
case 1660:
case 3337:
case 3378:
case 1548:
case 2343:
case 4039:
case 3044:
case 543:
case 35:
case 3953:
case 2776:
case 3882:
case 3592:
case 1469:
case 1394:
case 492:
case 2047:
case 3688:
case 408:
case 1068:
case 3564:
case 3139:
case 1359:
case 3072:
case 684:
case 1262:
case 3870:
case 2778:
case 2737:
case 2334:
case 3237:
case 3278:
case 3533:
case 767:
case 2363:
case 1568:
case 2321:
case 2404:
case 2420:
case 489:
case 520:
case 458:
case 1684:
case 988:
case 1906:
case 9:
case 88:
case 612:
case 894:
case 3585:
case 738:
case 530:
case 265:
case 3890:
case 2798:
case 1311:
case 1048:
case 3580:
case 875:
case 30:
case 3298:
case 907:
case 380:
case 56:
case 1908:
case 3396:
case 3763:
case 1895:
case 1092:
case 2742:
case 1585:
case 3242:
case 1102:
case 2181:
case 464:
case 1298:
case 1544:
case 3566:
case 3048:
case 3311:
case 3410:
case 3777:
case 2830:
case 2277:
case 2238:
case 786:
case 638:
case 1407:
case 2032:
case 180:
case 1721:
case 3908:
case 2774:
case 1533:
case 2338:
case 2377:
case 712:
case 628:
case 1572:
case 1296:
case 1064:
case 3568:
case 3640:
case 3684:
case 2236:
case 945:
case 1398:
case 2711:
case 2593:
case 3906:
case 3645:
case 514:
case 3619:
case 3211:
case 667:
case 2678:
case 2637:
case 1535:
case 2131:
case 1941:
case 2880:
case 3788:
case 2590:
case 1191:
case 2288:
case 942:
case 1697:
case 3643:
case 1001:
case 1893:
case 2676:
case 3847:
case 217:
case 344:
case 1809:
case 2388:
case 623:
case 2872:
case 3634:
case 3786:
case 2075:
case 1751:
case 2833:
case 3413:
case 2070:
case 1118:
case 3893:
case 1847:
case 2694:
case 4091:
case 3760:
case 2868:
case 2260:
case 453:
case 3751:
case 1413:
case 3765:
case 733:
case 161:
case 1116:
case 2365:
case 2866:
case 3191:
case 2450:
case 3697:
case 3001:
case 2423:
case 2455:
case 2348:
case 348:
case 185:
case 1152:
case 1764:
case 2562:
case 847:
case 2074:
case 3373:
case 1829:
case 1063:
case 2346:
case 940:
case 1267:
case 3956:
case 2732:
case 2559:
case 2902:
case 1981:
case 3077:
case 3273:
case 17:
case 2840:
case 3683:
case 1792:
case 2364:
case 3981:
case 1748:
case 4052:
case 2454:
case 805:
case 2292:
case 2108:
case 3792:
case 23:
case 385:
case 2695:
case 1958:
case 1597:
case 3457:
case 148:
case 2392:
case 4069:
case 1630:
case 3367:
case 3764:
case 893:
case 2537:
case 1635:
case 260:
case 1876:
case 2693:
case 382:
case 2609:
case 734:
case 3545:
case 3584:
case 1471:
case 3540:
case 3894:
case 3931:
case 1414:
case 1672:
case 532:
case 1926:
case 1837:
case 1878:
case 3862:
case 1270:
case 2405:
case 2400:
case 3060:
case 522:
case 609:
case 316:
case 1680:
case 1382:
case 724:
case 2424:
case 802:
case 898:
case 249:
case 2897:
case 1685:
case 55:
case 281:
case 3926:
case 2417:
case 2529:
case 3086:
case 624:
case 3382:
case 1666:
case 709:
case 116:
case 2843:
case 3685:
case 710:
case 1519:
case 3282:
case 1545:
case 2782:
case 3928:
case 969:
case 2141:
case 3471:
case 1122:
case 2991:
case 3489:
case 2863:
case 270:
case 1900:
case 1735:
case 1646:
case 293:
case 1418:
case 114:
case 3664:
case 860:
case 83:
case 3290:
case 199:
case 3898:
case 2795:
case 1045:
case 928:
case 82:
case 3390:
case 1783:
case 205:
case 1648:
case 429:
case 580:
case 3395:
case 2428:
case 36:
case 759:
case 3586:
case 2123:
case 645:
case 2161:
case 3896:
case 967:
case 1565:
case 2150:
case 2914:
case 3491:
case 1692:
case 3783:
case 2087:
case 2431:
case 3811:
case 745:
case 16:
case 404:
case 852:
case 3648:
case 6:
case 1586:
case 130:
case 3551:
case 1491:
case 490:
case 2330:
case 3565:
case 736:
case 3900:
case 3735:
case 2235:
case 314:
case 456:
case 2838:
case 3905:
case 3730:
case 3040:
case 3113:
case 3084:
case 1290:
case 3924:
case 607:
case 3842:
case 2037:
case 2078:
case 3733:
case 2233:
case 1402:
case 2481:
case 2272:
case 1768:
case 3772:
case 2886:
case 2479:
case 561:
case 3115:
case 2385:
case 1536:
case 2344:
case 979:
case 3954:
case 1209:
case 2747:
case 2076:
case 411:
case 2280:
case 1766:
case 2598:
case 1393:
case 855:
case 3780:
case 2888:
case 1309:
case 4049:
case 4015:
case 881:
case 2333:
case 915:
case 1577:
case 2670:
case 4010:
case 2104:
case 44:
case 2542:
case 1785:
case 1780:
case 2266:
case 1744:
case 3309:
case 3766:
case 2458:
case 2125:
case 3577:
case 1563:
case 1521:
case 2059:
case 2062:
case 3402:
case 923:
case 2268:
case 2860:
case 2456:
case 3107:
case 1954:
case 3293:
case 1247:
case 1484:
case 1440:
case 2322:
case 1527:
case 2625:
case 693:
case 2653:
case 1212:
case 3803:
case 3589:
case 2986:
case 747:
case 3514:
case 2604:
case 236:
case 3101:
case 54:
case 1241:
case 891:
case 3091:
case 2517:
case 2988:
case 3722:
case 2222:
case 2028:
case 3610:
case 1101:
case 2500:
case 2741:
case 1091:
case 153:
case 3649:
case 511:
case 3615:
case 259:
case 2031:
case 1722:
case 288:
case 2:
case 2524:
case 3016:
case 3484:
case 2170:
case 1571:
case 965:
case 647:
case 2175:
case 3527:
case 1899:
case 1803:
case 3212:
case 1589:
case 793:
case 461:
case 207:
case 2951:
case 3018:
case 578:
case 2965:
case 1824:
case 962:
case 834:
case 189:
case 1497:
case 2173:
case 3443:
case 1306:
case 3557:
case 158:
case 3148:
case 2437:
case 283:
case 341:
case 1805:
case 11:
case 1800:
case 2814:
case 3434:
case 504:
case 1974:
case 3613:
case 2503:
case 2476:
case 4048:
case 590:
case 1752:
case 2871:
case 573:
case 2554:
case 1206:
case 602:
case 3974:
case 529:
case 480:
case 1434:
case 1996:
case 2459:
case 2936:
case 810:
case 40:
case 164:
case 242:
case 2369:
case 3911:
case 4092:
case 3206:
case 2706:
case 2650:
case 2167:
case 2352:
case 2269:
case 1443:
case 1557:
case 917:
case 2623:
case 389:
case 3002:
case 2462:
case 4064:
case 857:
case 2977:
case 2938:
case 1817:
case 1148:
case 3208:
case 996:
case 3192:
case 2056:
case 760:
case 2349:
case 568:
case 3185:
case 1204:
case 2556:
case 3144:
case 807:
case 3180:
case 3502:
case 4072:
case 1057:
case 3831:
case 308:
case 527:
case 2411:
case 3994:
case 1253:
case 1225:
case 2816:
case 3436:
case 392:
case 537:
case 2558:
case 888:
case 3133:
case 3039:
case 2442:
case 3172:
case 1320:
case 4080:
case 1622:
case 72:
case 900:
case 2215:
case 1707:
case 1421:
case 3438:
case 919:
case 652:
case 2210:
case 1826:
case 387:
case 3353:
case 3325:
case 1133:
case 845:
case 422:
case 2943:
case 3168:
case 1039:
case 1715:
case 2099:
case 3304:
case 62:
case 2109:
case 3978:
case 3937:
case 187:
case 2193:
case 291:
case 1710:
case 1438:
case 2496:
case 826:
case 2934:
case 4068:
case 2891:
case 366:
case 1144:
case 1502:
case 2581:
case 3225:
case 1831:
case 3057:
case 432:
case 1994:
case 2725:
case 2579:
case 506:
case 192:
case 3220:
case 1436:
case 1929:
case 257:
case 446:
case 1089:
case 3027:
case 2723:
case 3669:
case 3261:
case 1071:
case 3987:
case 195:
case 755:
case 1879:
case 210:
case 2606:
case 842:
case 3516:
case 2945:
case 2024:
case 3361:
case 209:
case 2984:
case 1130:
case 3451:
case 1591:
case 1713:
case 2005:
case 2802:
case 1881:
case 3460:
case 2000:
case 3856:
case 2195:
case 1516:
case 1323:
case 681:
case 3135:
case 4083:
case 1355:
case 749:
case 224:
case 3130:
case 2213:
case 303:
case 1451:
case 2017:
case 3591:
case 3486:
case 1856:
case 2313:
case 1518:
case 2526:
case 3014:
case 4030:
case 3089:
case 1027:
case 1261:
case 413:
case 1250:
case 1858:
case 395:
case 2159:
case 2985:
case 1569:
case 2257:
case 3354:
case 178:
case 2053:
case 1841:
case 3303:
case 1618:
case 212:
case 2004:
case 3399:
case 2626:
case 840:
case 2933:
case 1143:
case 3197:
case 3203:
case 1812:
case 1049:
case 2799:
case 3299:
case 2703:
case 2467:
case 1448:
case 2357:
case 1616:
case 3254:
case 3947:
case 34:
case 1993:
case 1197:
case 3010:
case 1691:
case 1007:
case 4034:
case 3049:
case 3015:
case 1492:
case 3739:
case 2631:
case 1947:
case 14:
case 765:
case 3909:
case 238:
case 2339:
case 1757:
case 378:
case 228:
case 877:
case 2508:
case 3618:
case 2176:
case 3446:
case 884:
case 4045:
case 2679:
case 4019:
case 541:
case 3771:
case 89:
case 998:
case 1806:
case 902:
case 1727:
case 499:
case 1401:
case 4040:
case 3789:
case 1300:
case 2681:
case 356:
case 2214:
case 3714:
case 1305:
case 617:
case 1200:
case 3119:
case 390:
case 3217:
case 2717:
case 2470:
case 3140:
case 3013:
case 129:
case 696:
case 2371:
case 3522:
case 304:
case 3995:
case 2935:
case 662:
case 2700:
case 1145:
case 3200:
case 1119:
case 1140:
case 796:
case 3205:
case 430:
case 2705:
case 46:
case 329:
case 1522:
case 717:
case 3224:
case 1995:
case 2724:
case 2129:
case 1771:
case 3806:
case 51:
case 2227:
case 2055:
case 2852:
case 1789:
case 3300:
case 1714:
case 589:
case 420:
case 558:
case 1970:
case 3718:
case 106:
case 2815:
case 2012:
case 368:
case 2316:
case 1657:
case 794:
case 2561:
case 1328:
case 828:
case 2216:
case 2901:
case 1820:
case 1228:
case 3639:
case 3483:
case 587:
case 2731:
case 1022:
case 960:
case 1513:
case 3188:
case 4086:
case 443:
case 2654:
case 3982:
case 3022:
case 3825:
case 1231:
case 1639:
case 137:
case 4060:
case 2603:
case 3791:
case 4065:
case 675:
case 3804:
case 497:
case 3226:
case 1718:
case 127:
case 3970:
case 2726:
case 3975:
case 2807:
case 812:
case 240:
case 68:
case 1435:
case 168:
case 482:
case 2490:
case 1331:
case 1614:
case 3256:
case 451:
case 2756:
case 721:
case 3973:
case 815:
case 2198:
case 1689:
case 3358:
case 955:
case 1138:
case 1177:
case 2948:
case 3069:
case 3163:
case 485:
case 3121:
case 3258:
case 879:
case 1444:
case 3850:
case 3052:
case 1379:
case 3861:
case 1136:
case 3356:
case 2946:
case 4063:
case 672:
case 1381:
case 2302:
case 4021:
case 1258:
case 3480:
case 503:
case 1861:
case 3379:
case 1855:
case 363:
case 1549:
case 1356:
case 2617:
case 4038:
case 574:
case 3381:
case 2111:
case 823:
case 1932:
case 1468:
case 3472:
case 1256:
case 3614:
case 3967:
case 595:
case 2813:
case 1702:
case 1627:
case 2553:
case 4036:
case 2447:
case 2525:
case 29:
case 3138:
case 3177:
case 1121:
case 2520:
case 621:
case 3279:
case 1163:
case 3671:
case 2992:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758074402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,];
var gg_b = "1758074402/";

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
