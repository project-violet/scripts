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
case 794:
case 2877:
case 1125:
case 638:
case 1478:
case 2186:
case 3248:
case 474:
case 2192:
case 1630:
case 2321:
case 2581:
case 689:
case 1709:
case 1473:
case 3243:
case 93:
case 817:
case 711:
case 2436:
case 1619:
case 497:
case 1465:
case 3017:
case 777:
case 871:
case 2593:
case 1354:
case 2905:
case 4058:
case 1663:
case 316:
case 2939:
case 2301:
case 2140:
case 3854:
case 2342:
case 1139:
case 2823:
case 2846:
case 2967:
case 2910:
case 1312:
case 2753:
case 4053:
case 486:
case 3724:
case 1668:
case 809:
case 3812:
case 378:
case 590:
case 1489:
case 179:
case 964:
case 3038:
case 1241:
case 2828:
case 2264:
case 1739:
case 1437:
case 2299:
case 3028:
case 343:
case 2271:
case 3698:
case 3464:
case 2012:
case 488:
case 1705:
case 2838:
case 376:
case 439:
case 1615:
case 990:
case 2284:
case 3046:
case 1372:
case 1187:
case 3197:
case 2833:
case 1683:
case 318:
case 2645:
case 3023:
case 709:
case 3376:
case 1600:
case 16:
case 762:
case 2153:
case 53:
case 4092:
case 894:
case 2792:
case 2817:
case 231:
case 220:
case 593:
case 3008:
case 3250:
case 414:
case 2786:
case 4086:
case 1725:
case 3495:
case 1855:
case 3549:
case 1413:
case 2935:
case 1090:
case 3104:
case 2909:
case 636:
case 1620:
case 717:
case 811:
case 3962:
case 760:
case 2166:
case 384:
case 1966:
case 1021:
case 1847:
case 491:
case 1109:
case 2860:
case 2448:
case 107:
case 877:
case 1544:
case 771:
case 3951:
case 3003:
case 1306:
case 3670:
case 3768:
case 3100:
case 2505:
case 1624:
case 1094:
case 1802:
case 3945:
case 3084:
case 3438:
case 1841:
case 1027:
case 849:
case 2864:
case 2228:
case 3183:
case 690:
case 3071:
case 3302:
case 1697:
case 195:
case 2567:
case 3687:
case 1193:
case 369:
case 2510:
case 3115:
case 1259:
case 48:
case 2998:
case 2472:
case 3763:
case 2246:
case 3188:
case 1198:
case 3775:
case 3254:
case 835:
case 2223:
case 2895:
case 300:
case 3826:
case 3191:
case 1007:
case 1073:
case 754:
case 1714:
case 2050:
case 2318:
case 692:
case 3582:
case 6:
case 1592:
case 3843:
case 2974:
case 1326:
case 1604:
case 3417:
case 3719:
case 141:
case 1065:
case 538:
case 1431:
case 3460:
case 552:
case 936:
case 2277:
case 2203:
case 2313:
case 4044:
case 2744:
case 629:
case 3756:
case 953:
case 1490:
case 3720:
case 1013:
case 536:
case 1774:
case 938:
case 3119:
case 952:
case 2914:
case 1781:
case 1114:
case 324:
case 989:
case 3779:
case 3949:
case 1161:
case 3130:
case 3562:
case 3156:
case 63:
case 2952:
case 1350:
case 2307:
case 2373:
case 2217:
case 3408:
case 2365:
case 2043:
case 693:
case 1944:
case 3850:
case 1276:
case 1401:
case 3423:
case 3783:
case 3168:
case 405:
case 37:
case 2871:
case 1798:
case 1037:
case 428:
case 2006:
case 3639:
case 2412:
case 664:
case 1069:
case 3163:
case 2529:
case 735:
case 3667:
case 2587:
case 3510:
case 2115:
case 3811:
case 893:
case 1988:
case 4063:
case 1658:
case 2775:
case 1201:
case 4075:
case 3246:
case 3223:
case 960:
case 594:
case 917:
case 2254:
case 2433:
case 83:
case 577:
case 3505:
case 1157:
case 3993:
case 21:
case 2670:
case 4068:
case 1653:
case 2341:
case 2084:
case 133:
case 472:
case 1534:
case 3864:
case 3228:
case 2438:
case 1837:
case 792:
case 2687:
case 156:
case 383:
case 2957:
case 2460:
case 864:
case 1221:
case 909:
case 344:
case 3203:
case 962:
case 127:
case 1447:
case 563:
case 3744:
case 4030:
case 2730:
case 3280:
case 1455:
case 2756:
case 470:
case 2635:
case 200:
case 2843:
case 790:
case 1920:
case 2322:
case 3662:
case 2596:
case 3525:
case 1032:
case 3981:
case 2417:
case 764:
case 1865:
case 3373:
case 3307:
case 3217:
case 121:
case 2562:
case 2156:
case 2625:
case 1504:
case 2850:
case 2551:
case 1149:
case 1873:
case 2332:
case 1930:
case 2095:
case 380:
case 3961:
case 2480:
case 3378:
case 2119:
case 3914:
case 509:
case 2791:
case 1919:
case 410:
case 1231:
case 3260:
case 3048:
case 4079:
case 2403:
case 2605:
case 1384:
case 1963:
case 2175:
case 4088:
case 3570:
case 3394:
case 2428:
case 203:
case 793:
case 1827:
case 1041:
case 3006:
case 2715:
case 1416:
case 446:
case 1640:
case 3327:
case 1975:
case 359:
case 132:
case 3389:
case 2446:
case 2610:
case 1968:
case 2423:
case 994:
case 375:
case 517:
case 1459:
case 1757:
case 2168:
case 892:
case 2272:
case 2243:
case 1762:
case 2614:
case 935:
case 3295:
case 1751:
case 2017:
case 1308:
case 3766:
case 4004:
case 3803:
case 2060:
case 2652:
case 3186:
case 1047:
case 3574:
case 2982:
case 1821:
case 1520:
case 304:
case 2996:
case 1591:
case 2661:
case 1588:
case 853:
case 2724:
case 3753:
case 677:
case 4024:
case 2484:
case 242:
case 2038:
case 1237:
case 2797:
case 323:
case 554:
case 2471:
case 3264:
case 1515:
case 1583:
case 3758:
case 1346:
case 3072:
case 789:
case 2134:
case 1076:
case 3342:
case 2854:
case 2033:
case 752:
case 2557:
case 1500:
case 1924:
case 2693:
case 3970:
case 753:
case 2023:
case 44:
case 2872:
case 617:
case 3987:
case 2411:
case 399:
case 3657:
case 660:
case 198:
case 2124:
case 3929:
case 243:
case 3406:
case 1568:
case 3012:
case 2464:
case 889:
case 3158:
case 954:
case 1338:
case 838:
case 4034:
case 1294:
case 609:
case 3935:
case 1151:
case 2549:
case 549:
case 3166:
case 662:
case 2962:
case 3909:
case 1556:
case 1162:
case 2355:
case 284:
case 2003:
case 1278:
case 1831:
case 3561:
case 2681:
case 1530:
case 3448:
case 3860:
case 2008:
case 2250:
case 1273:
case 1207:
case 1317:
case 3443:
case 1519:
case 3426:
case 1796:
case 3786:
case 3015:
case 1769:
case 1467:
case 866:
case 2224:
case 3253:
case 627:
case 1439:
case 1737:
case 373:
case 2297:
case 4006:
case 482:
case 981:
case 30:
case 205:
case 3000:
case 3642:
case 3258:
case 2927:
case 3184:
case 795:
case 3711:
case 1189:
case 312:
case 1572:
case 3199:
case 1410:
case 3171:
case 3601:
case 2743:
case 251:
case 1785:
case 480:
case 1608:
case 2726:
case 596:
case 2978:
case 2819:
case 2492:
case 3266:
case 965:
case 2965:
case 3091:
case 1677:
case 2150:
case 3555:
case 1849:
case 1081:
case 1107:
case 2136:
case 2361:
case 4048:
case 3932:
case 3621:
case 741:
case 1074:
case 3547:
case 2352:
case 69:
case 3844:
case 3690:
case 2973:
case 2830:
case 2531:
case 656:
case 1926:
case 3056:
case 2381:
case 2521:
case 1052:
case 2918:
case 3195:
case 1778:
case 2126:
case 2374:
case 2590:
case 658:
case 3631:
case 3922:
case 1948:
case 1282:
case 361:
case 1765:
case 3019:
case 3404:
case 841:
case 1014:
case 598:
case 2750:
case 1773:
case 996:
case 4036:
case 1296:
case 1435:
case 2148:
case 95:
case 1633:
case 135:
case 1845:
case 2106:
case 3164:
case 3357:
case 630:
case 2676:
case 3902:
case 1169:
case 3941:
case 1554:
case 3345:
case 2937:
case 385:
case 3063:
case 2800:
case 2501:
case 1727:
case 348:
case 1789:
case 149:
case 868:
case 3771:
case 415:
case 3068:
case 1470:
case 2453:
case 1794:
case 1481:
case 1721:
case 3491:
case 3703:
case 807:
case 2578:
case 834:
case 3244:
case 3420:
case 2230:
case 3780:
case 1474:
case 3613:
case 3708:
case 431:
case 3685:
case 1695:
case 3351:
case 1025:
case 2086:
case 1862:
case 3618:
case 2804:
case 3866:
case 1851:
case 1550:
case 2622:
case 2931:
case 696:
case 2219:
case 3362:
case 1611:
case 34:
case 779:
case 930:
case 921:
case 499:
case 2275:
case 819:
case 3138:
case 3746:
case 3723:
case 4054:
case 2268:
case 306:
case 3853:
case 2602:
case 2040:
case 3669:
case 422:
case 1664:
case 2370:
case 2594:
case 1039:
case 3133:
case 2712:
case 2897:
case 423:
case 1101:
case 3146:
case 1671:
case 2942:
case 879:
case 1340:
case 1699:
case 2367:
case 3502:
case 3123:
case 2215:
case 2305:
case 719:
case 1684:
case 2834:
case 1506:
case 3694:
case 1954:
case 2537:
case 2339:
case 2901:
case 2053:
case 521:
case 530:
case 1245:
case 3128:
case 3475:
case 2283:
case 22:
case 2310:
case 2200:
case 1257:
case 4072:
case 3463:
case 3396:
case 3180:
case 1190:
case 1386:
case 707:
case 3892:
case 3419:
case 171:
case 2066:
case 2921:
case 734:
case 3886:
case 1414:
case 1009:
case 1392:
case 3673:
case 2990:
case 665:
case 3177:
case 698:
case 160:
case 3103:
case 3382:
case 2444:
case 3456:
case 2291:
case 1452:
case 1731:
case 3760:
case 2513:
case 2955:
case 1626:
case 2685:
case 2160:
case 2708:
case 1147:
case 2532:
case 2351:
case 1643:
case 1096:
case 2866:
case 3804:
case 3092:
case 1960:
case 3309:
case 1155:
case 655:
case 391:
case 1252:
case 484:
case 4077:
case 4003:
case 2479:
case 2780:
case 679:
case 966:
case 3256:
case 1870:
case 1716:
case 2853:
case 3824:
case 3268:
case 1933:
case 3589:
case 3329:
case 152:
case 3040:
case 2976:
case 2034:
case 3527:
case 339:
case 1606:
case 3594:
case 1584:
case 1324:
case 1176:
case 1829:
case 3712:
case 1887:
case 2637:
case 1759:
case 2400:
case 2858:
case 865:
case 3263:
case 2746:
case 4046:
case 3754:
case 1810:
case 2475:
case 3283:
case 3112:
case 416:
case 3310:
case 3058:
case 3200:
case 4038:
case 2097:
case 2146:
case 1839:
case 136:
case 3154:
case 2541:
case 1159:
case 2840:
case 2468:
case 3834:
case 3305:
case 1946:
case 1867:
case 3444:
case 3220:
case 1274:
case 1755:
case 1281:
case 3291:
case 4060:
case 887:
case 781:
case 1449:
case 2180:
case 2396:
case 1903:
case 1051:
case 1977:
case 3325:
case 2892:
case 2717:
case 1636:
case 3518:
case 2382:
case 2177:
case 66:
case 2607:
case 2673:
case 3990:
case 2000:
case 305:
case 2576:
case 2711:
case 79:
case 1375:
case 4011:
case 3994:
case 212:
case 1045:
case 2601:
case 3875:
case 1702:
case 246:
case 2015:
case 2253:
case 3868:
case 1538:
case 3440:
case 832:
case 3297:
case 129:
case 2088:
case 3706:
case 4064:
case 2764:
case 210:
case 3965:
case 1356:
case 2091:
case 2932:
case 2621:
case 2079:
case 3136:
case 1852:
case 424:
case 2349:
case 1132:
case 3856:
case 190:
case 579:
case 1861:
case 1560:
case 2690:
case 3973:
case 2844:
case 351:
case 3743:
case 3726:
case 1496:
case 4095:
case 3492:
case 3204:
case 821:
case 261:
case 1732:
case 2292:
case 2019:
case 2404:
case 3466:
case 56:
case 270:
case 1462:
case 1225:
case 1379:
case 3655:
case 1503:
case 1577:
case 3044:
case 1122:
case 3820:
case 3381:
case 1391:
case 979:
case 3143:
case 3879:
case 666:
case 2922:
case 2631:
case 1580:
case 3590:
case 827:
case 730:
case 1911:
case 272:
case 248:
case 2497:
case 402:
case 469:
case 89:
case 856:
case 1315:
case 534:
case 4071:
case 41:
case 2068:
case 1267:
case 2424:
case 3234:
case 1388:
case 833:
case 3883:
case 1210:
case 2902:
case 2357:
case 2164:
case 3969:
case 1141:
case 2559:
case 732:
case 1523:
case 1383:
case 3501:
case 193:
case 3800:
case 3937:
case 2063:
case 2345:
case 38:
case 2528:
case 1424:
case 937:
case 3512:
case 456:
case 2205:
case 2315:
case 869:
case 49:
case 3429:
case 802:
case 1799:
case 77:
case 2239:
case 2911:
case 1345:
case 185:
case 3169:
case 2102:
case 703:
case 3554:
case 3906:
case 2141:
case 3845:
case 1164:
case 1902:
case 113:
case 2225:
case 3296:
case 3435:
case 800:
case 675:
case 2462:
case 3707:
case 170:
case 3765:
case 2508:
case 1019:
case 3948:
case 4032:
case 3282:
case 2732:
case 3660:
case 3185:
case 2580:
case 2049:
case 923:
case 264:
case 522:
case 682:
case 1030:
case 3926:
case 3061:
case 1844:
case 3680:
case 2861:
case 683:
case 290:
case 3074:
case 3713:
case 1349:
case 354:
case 3936:
case 3344:
case 1079:
case 1621:
case 2356:
case 3677:
case 1555:
case 167:
case 615:
case 3849:
case 421:
case 430:
case 3718:
case 2482:
case 3785:
case 2235:
case 3425:
case 2496:
case 1795:
case 3178:
case 2209:
case 3410:
case 1171:
case 3646:
case 1601:
case 3189:
case 2363:
case 931:
case 3127:
case 2375:
case 3194:
case 769:
case 1711:
case 2533:
case 1642:
case 87:
case 1000:
case 2057:
case 2368:
case 3628:
case 3405:
case 3439:
case 1088:
case 229:
case 2229:
case 173:
case 458:
case 644:
case 2538:
case 1015:
case 2702:
case 2747:
case 487:
case 3731:
case 559:
case 1760:
case 1456:
case 2755:
case 2274:
case 3461:
case 1430:
case 622:
case 1607:
case 2650:
case 1103:
case 1177:
case 360:
case 1382:
case 2825:
case 2062:
case 840:
case 1886:
case 3414:
case 1717:
case 1892:
case 1419:
case 3543:
case 3882:
case 2903:
case 2977:
case 784:
case 3190:
case 2116:
case 3257:
case 45:
case 1916:
case 776:
case 3245:
case 1128:
case 1475:
case 2867:
case 3142:
case 3070:
case 1694:
case 3506:
case 3954:
case 1959:
case 944:
case 236:
case 2839:
case 3101:
case 3087:
case 108:
case 3029:
case 1097:
case 3340:
case 2887:
case 2829:
case 1728:
case 2324:
case 2584:
case 3039:
case 2599:
case 1976:
case 2397:
case 604:
case 1669:
case 238:
case 3067:
case 4016:
case 2571:
case 2870:
case 1415:
case 980:
case 1483:
case 3358:
case 3010:
case 1138:
case 2445:
case 1858:
case 3742:
case 465:
case 1400:
case 4059:
case 14:
case 3550:
case 250:
case 2960:
case 1618:
case 481:
case 1947:
case 1866:
case 394:
case 975:
case 2096:
case 2643:
case 1351:
case 3862:
case 1708:
case 2304:
case 3131:
case 2214:
case 2835:
case 2626:
case 1955:
case 583:
case 3474:
case 1777:
case 377:
case 3249:
case 2917:
case 884:
case 260:
case 2035:
case 1990:
case 217:
case 2414:
case 2896:
case 1518:
case 1921:
case 1066:
case 2882:
case 271:
case 2386:
case 3595:
case 1585:
case 1325:
case 3977:
case 969:
case 1279:
case 3747:
case 804:
case 1513:
case 676:
case 2452:
case 1291:
case 503:
case 1220:
case 1444:
case 720:
case 2461:
case 1901:
case 353:
case 186:
case 2142:
case 3867:
case 3159:
case 684:
case 2506:
case 3564:
case 2684:
case 524:
case 3923:
case 1305:
case 336:
case 1569:
case 3839:
case 1154:
case 2340:
case 1942:
case 479:
case 3805:
case 2101:
case 3334:
case 1772:
case 3928:
case 2257:
case 1200:
case 1310:
case 1058:
case 722:
case 3116:
case 12:
case 1112:
case 3511:
case 2245:
case 1754:
case 2358:
case 2010:
case 2493:
case 3445:
case 2742:
case 46:
case 1263:
case 4042:
case 2611:
case 3829:
case 188:
case 263:
case 924:
case 3887:
case 2353:
case 2972:
case 3606:
case 2664:
case 822:
case 338:
case 1329:
case 1602:
case 1387:
case 139:
case 1172:
case 3870:
case 1824:
case 1256:
case 4090:
case 3261:
case 569:
case 678:
case 434:
case 642:
case 2249:
case 277:
case 407:
case 51:
case 191:
case 2721:
case 3648:
case 903:
case 3960:
case 1219:
case 1622:
case 1931:
case 704:
case 3155:
case 2851:
case 1507:
case 3082:
case 1086:
case 3643:
case 2025:
case 2695:
case 3626:
case 831:
case 1565:
case 3835:
case 3304:
case 616:
case 3214:
case 2857:
case 3546:
case 1937:
case 2554:
case 1458:
case 3102:
case 3523:
case 3210:
case 759:
case 1969:
case 2845:
case 2137:
case 3893:
case 1883:
case 624:
case 584:
case 1453:
case 1815:
case 3388:
case 2512:
case 495:
case 3898:
case 3205:
case 2638:
case 883:
case 3315:
case 2487:
case 3911:
case 249:
case 2789:
case 2727:
case 2429:
case 2185:
case 3580:
case 1590:
case 1374:
case 1126:
case 2778:
case 576:
case 1891:
case 364:
case 1918:
case 2052:
case 1647:
case 978:
case 2118:
case 1521:
case 1381:
case 780:
case 3874:
case 157:
case 2926:
case 603:
case 3995:
case 1655:
case 1044:
case 3503:
case 1736:
case 2435:
case 3225:
case 1913:
case 4073:
case 2707:
case 2773:
case 1750:
case 67:
case 4065:
case 518:
case 441:
case 3732:
case 2113:
case 916:
case 2617:
case 2948:
case 744:
case 1204:
case 2718:
case 1314:
case 3722:
case 1819:
case 3482:
case 1978:
case 4085:
case 1726:
case 516:
case 3496:
case 880:
case 1486:
case 2608:
case 3235:
case 2785:
case 3319:
case 3209:
case 2262:
case 3517:
case 3861:
case 2165:
case 1973:
case 2950:
case 2936:
case 602:
case 1856:
case 2074:
case 976:
case 3330:
case 447:
case 1136:
case 2344:
case 2173:
case 2107:
case 61:
case 2677:
case 3356:
case 882:
case 3368:
case 1297:
case 3229:
case 4037:
case 2098:
case 329:
case 2737:
case 984:
case 3538:
case 1868:
case 466:
case 2769:
case 4069:
case 2093:
case 2410:
case 1875:
case 2572:
case 3045:
case 2189:
case 540:
case 1989:
case 3:
case 1927:
case 3057:
case 600:
case 3533:
case 1863:
case 105:
case 3135:
case 3691:
case 1003:
case 1951:
case 3544:
case 184:
case 3021:
case 2904:
case 2556:
case 1962:
case 2360:
case 3855:
case 334:
case 3090:
case 3725:
case 2796:
case 1495:
case 58:
case 2317:
case 1250:
case 3418:
case 2265:
case 905:
case 3232:
case 2782:
case 3600:
case 1411:
case 265:
case 1872:
case 84:
case 708:
case 3876:
case 3372:
case 319:
case 1693:
case 3001:
case 3953:
case 3187:
case 697:
case 3129:
case 2924:
case 3683:
case 118:
case 2563:
case 674:
case 3615:
case 452:
case 2338:
case 2016:
case 3469:
case 2402:
case 489:
case 557:
case 2568:
case 3739:
case 3437:
case 2289:
case 2227:
case 1471:
case 1797:
case 1499:
case 3427:
case 2237:
case 379:
case 3787:
case 1484:
case 3816:
case 3202:
case 2269:
case 957:
case 2500:
case 3105:
case 2801:
case 296:
case 3675:
case 25:
case 1033:
case 1359:
case 2076:
case 3859:
case 614:
case 825:
case 2842:
case 3167:
case 116:
case 3465:
case 2308:
case 1704:
case 2218:
case 3619:
case 3222:
case 4051:
case 2432:
case 505:
case 1614:
case 3735:
case 3709:
case 2762:
case 3473:
case 4062:
case 140:
case 688:
case 528:
case 2579:
case 3986:
case 2303:
case 2182:
case 926:
case 3125:
case 3478:
case 1982:
case 2380:
case 3992:
case 2047:
case 639:
case 3031:
case 287:
case 366:
case 2597:
case 2399:
case 2975:
case 2002:
case 713:
case 846:
case 2894:
case 2640:
case 2416:
case 3634:
case 1639:
case 2889:
case 2827:
case 1064:
case 1428:
case 657:
case 3553:
case 1175:
case 3037:
case 1605:
case 2524:
case 991:
case 1011:
case 492:
case 748:
case 1168:
case 2757:
case 1700:
case 80:
case 2459:
case 17:
case 1423:
case 914:
case 3793:
case 812:
case 1610:
case 3276:
case 1446:
case 52:
case 2807:
case 2873:
case 3944:
case 3085:
case 1408:
case 2686:
case 1836:
case 3566:
case 2956:
case 1625:
case 2504:
case 3832:
case 1562:
case 3018:
case 2692:
case 2022:
case 1949:
case 3336:
case 3161:
case 2865:
case 124:
case 1779:
case 810:
case 3114:
case 626:
case 3421:
case 2878:
case 586:
case 3255:
case 490:
case 3013:
case 2813:
case 3761:
case 1730:
case 588:
case 2290:
case 227:
case 539:
case 2221:
case 464:
case 3752:
case 3822:
case 1719:
case 3065:
case 2032:
case 92:
case 3174:
case 2818:
case 767:
case 861:
case 1596:
case 1120:
case 1179:
case 1843:
case 100:
case 3007:
case 3073:
case 3181:
case 3714:
case 43:
case 1188:
case 2201:
case 2476:
case 1775:
case 885:
case 2988:
case 1763:
case 493:
case 651:
case 3259:
case 773:
case 256:
case 1183:
case 1212:
case 3697:
case 2900:
case 974:
case 3193:
case 169:
case 848:
case 1806:
case 3540:
case 102:
case 70:
case 3841:
case 1099:
case 3027:
case 2534:
case 3802:
case 2869:
case 591:
case 1084:
case 2653:
case 3306:
case 1768:
case 2157:
case 2983:
case 3624:
case 1100:
case 2442:
case 175:
case 1454:
case 1233:
case 2558:
case 3745:
case 2401:
case 159:
case 3597:
case 2634:
case 3640:
case 3827:
case 78:
case 3041:
case 3524:
case 828:
case 3963:
case 1394:
case 1570:
case 2798:
case 1871:
case 2553:
case 1048:
case 247:
case 3878:
case 3231:
case 3919:
case 2781:
case 1260:
case 1914:
case 906:
case 2774:
case 1378:
case 454:
case 648:
case 4074:
case 672:
case 2085:
case 2944:
case 3807:
case 3149:
case 685:
case 3930:
case 525:
case 1026:
case 1043:
case 1696:
case 757:
case 3686:
case 2566:
case 1217:
case 3692:
case 2018:
case 1952:
case 1682:
case 3865:
case 94:
case 2336:
case 3991:
case 2343:
case 1651:
case 2822:
case 1981:
case 1385:
case 612:
case 3395:
case 3979:
case 2174:
case 3666:
case 2592:
case 3920:
case 1036:
case 1662:
case 60:
case 3885:
case 2714:
case 4014:
case 3290:
case 751:
case 2348:
case 2761:
case 1313:
case 1277:
case 144:
case 506:
case 2078:
case 327:
case 908:
case 646:
case 2431:
case 2752:
case 39:
case 2193:
case 3837:
case 1567:
case 295:
case 3900:
case 356:
case 268:
case 1369:
case 1228:
case 2027:
case 2089:
case 705:
case 826:
case 3983:
case 1993:
case 3653:
case 3915:
case 1223:
case 435:
case 2198:
case 3201:
case 1246:
case 3988:
case 88:
case 3242:
case 3658:
case 2259:
case 2725:
case 4025:
case 1786:
case 814:
case 3317:
case 3273:
case 1443:
case 912:
case 3519:
case 774:
case 1514:
case 2418:
case 1817:
case 1792:
case 90:
case 2232:
case 2544:
case 477:
case 3831:
case 1561:
case 3530:
case 3556:
case 973:
case 2109:
case 2847:
case 2966:
case 3360:
case 1909:
case 548:
case 2090:
case 608:
case 3151:
case 2413:
case 234:
case 946:
case 2855:
case 1740:
case 3294:
case 2767:
case 3402:
case 1158:
case 1838:
case 3441:
case 463:
case 1012:
case 1271:
case 3227:
case 3289:
case 2437:
case 72:
case 910:
case 1153:
case 365:
case 1987:
case 3575:
case 570:
case 199:
case 26:
case 398:
case 3997:
case 4010:
case 561:
case 2710:
case 3924:
case 2953:
case 1970:
case 219:
case 3801:
case 396:
case 3076:
case 1140:
case 788:
case 2859:
case 3346:
case 1072:
case 1939:
case 2663:
case 961:
case 2167:
case 82:
case 3842:
case 1264:
case 2110:
case 462:
case 3515:
case 2787:
case 409:
case 4087:
case 4070:
case 886:
case 2816:
case 1598:
case 2312:
case 1910:
case 3591:
case 1880:
case 714:
case 1321:
case 2630:
case 3182:
case 3213:
case 1925:
case 3377:
case 137:
case 1192:
case 1390:
case 874:
case 3047:
case 3821:
case 2125:
case 1803:
case 1877:
case 1649:
case 387:
case 948:
case 471:
case 3218:
case 201:
case 1766:
case 985:
case 512:
case 3432:
case 897:
case 2619:
case 2222:
case 1436:
case 3285:
case 1808:
case 460:
case 2735:
case 50:
case 417:
case 1295:
case 4009:
case 2473:
case 1450:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745910002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,];
var gg_b = "1745913601/";

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
