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
case 3136:
case 2301:
case 2148:
case 450:
case 725:
case 157:
case 2834:
case 4058:
case 2091:
case 483:
case 1872:
case 1815:
case 2504:
case 882:
case 1612:
case 392:
case 2200:
case 1883:
case 2786:
case 3879:
case 3275:
case 875:
case 283:
case 4091:
case 2384:
case 3118:
case 1270:
case 2840:
case 3464:
case 2226:
case 3924:
case 1371:
case 1401:
case 625:
case 633:
case 250:
case 3492:
case 3621:
case 1476:
case 2687:
case 1096:
case 2960:
case 2155:
case 2420:
case 3943:
case 277:
case 87:
case 2267:
case 2959:
case 3072:
case 3566:
case 3015:
case 3325:
case 170:
case 2268:
case 4009:
case 1221:
case 3103:
case 3593:
case 2376:
case 1586:
case 2985:
case 2406:
case 2189:
case 592:
case 2290:
case 703:
case 294:
case 208:
case 2594:
case 2104:
case 3731:
case 2001:
case 117:
case 3222:
case 3750:
case 410:
case 459:
case 2391:
case 2548:
case 3128:
case 2237:
case 3536:
case 3769:
case 2357:
case 259:
case 2132:
case 1457:
case 210:
case 867:
case 1825:
case 1229:
case 3820:
case 2181:
case 3246:
case 1622:
case 2084:
case 2358:
case 906:
case 3518:
case 408:
case 494:
case 2695:
case 1789:
case 1174:
case 1033:
case 1071:
case 2998:
case 1211:
case 1445:
case 3166:
case 2099:
case 2555:
case 736:
case 2463:
case 1956:
case 4076:
case 3440:
case 1006:
case 3372:
case 3315:
case 1396:
case 343:
case 265:
case 1794:
case 925:
case 2496:
case 286:
case 933:
case 1409:
case 3193:
case 1363:
case 2654:
case 2562:
case 2076:
case 2345:
case 636:
case 482:
case 2741:
case 275:
case 393:
case 1694:
case 2979:
case 601:
case 3247:
case 1945:
case 850:
case 3126:
case 1149:
case 1648:
case 1456:
case 2963:
case 541:
case 3940:
case 169:
case 838:
case 2236:
case 701:
case 632:
case 3294:
case 1060:
case 2910:
case 3516:
case 3590:
case 3807:
case 475:
case 3650:
case 3262:
case 1852:
case 3729:
case 1398:
case 1187:
case 3414:
case 244:
case 727:
case 3289:
case 3673:
case 2497:
case 155:
case 1397:
case 1188:
case 1273:
case 1351:
case 1231:
case 593:
case 134:
case 2498:
case 1282:
case 627:
case 3335:
case 1957:
case 877:
case 1269:
case 1554:
case 1007:
case 902:
case 3167:
case 1250:
case 1662:
case 2460:
case 281:
case 3443:
case 3352:
case 2920:
case 3232:
case 3526:
case 810:
case 3138:
case 2227:
case 859:
case 3281:
case 3992:
case 3380:
case 1604:
case 631:
case 4056:
case 2787:
case 2575:
case 2512:
case 1976:
case 3661:
case 602:
case 3897:
case 3500:
case 1261:
case 2788:
case 2906:
case 384:
case 1023:
case 2814:
case 542:
case 808:
case 2056:
case 2413:
case 1359:
case 1239:
case 1835:
case 481:
case 2122:
case 927:
case 467:
case 1360:
case 160:
case 1632:
case 3830:
case 1478:
case 3770:
case 396:
case 1984:
case 901:
case 1712:
case 342:
case 1141:
case 2377:
case 1308:
case 2749:
case 2933:
case 3753:
case 3823:
case 2266:
case 3567:
case 1097:
case 1477:
case 932:
case 2408:
case 1030:
case 3719:
case 3035:
case 1588:
case 1767:
case 2542:
case 755:
case 127:
case 3228:
case 2137:
case 2830:
case 960:
case 2897:
case 2190:
case 3674:
case 2500:
case 2116:
case 3485:
case 3814:
case 1480:
case 3788:
case 284:
case 3056:
case 2992:
case 3575:
case 3787:
case 1274:
case 1129:
case 381:
case 1628:
case 1768:
case 2844:
case 220:
case 2443:
case 2352:
case 891:
case 3920:
case 2138:
case 3227:
case 1925:
case 2526:
case 367:
case 3459:
case 1465:
case 1553:
case 1693:
case 669:
case 2035:
case 3705:
case 496:
case 581:
case 2823:
case 1111:
case 2424:
case 567:
case 2568:
case 3933:
case 2753:
case 3971:
case 1726:
case 1666:
case 915:
case 3407:
case 2770:
case 1618:
case 2294:
case 846:
case 3910:
case 892:
case 4052:
case 2516:
case 698:
case 493:
case 969:
case 3754:
case 2537:
case 3236:
case 3522:
case 2711:
case 3546:
case 2247:
case 57:
case 2126:
case 615:
case 3963:
case 3824:
case 1529:
case 3423:
case 2940:
case 2080:
case 3112:
case 2902:
case 3218:
case 375:
case 4065:
case 704:
case 2255:
case 1737:
case 3843:
case 2167:
case 102:
case 2860:
case 934:
case 1314:
case 575:
case 1603:
case 1790:
case 760:
case 3203:
case 2885:
case 2289:
case 3451:
case 2631:
case 3497:
case 3430:
case 131:
case 2262:
case 2168:
case 441:
case 3892:
case 3998:
case 565:
case 310:
case 3181:
case 291:
case 3944:
case 2127:
case 2750:
case 917:
case 2222:
case 1139:
case 12:
case 3548:
case 2128:
case 3237:
case 884:
case 2914:
case 1064:
case 586:
case 3104:
case 2731:
case 3001:
case 1295:
case 1092:
case 1340:
case 2871:
case 3562:
case 3076:
case 3345:
case 757:
case 896:
case 1483:
case 3589:
case 1718:
case 842:
case 3410:
case 386:
case 3496:
case 1415:
case 648:
case 2193:
case 2372:
case 2315:
case 657:
case 243:
case 748:
case 1531:
case 2383:
case 365:
case 56:
case 510:
case 1801:
case 1550:
case 1569:
case 1736:
case 3555:
case 1334:
case 188:
case 2440:
case 3864:
case 3840:
case 3226:
case 1642:
case 2527:
case 829:
case 3581:
case 1249:
case 1845:
case 319:
case 893:
case 3786:
case 2879:
case 1600:
case 3802:
case 383:
case 492:
case 2118:
case 446:
case 3091:
case 1809:
case 1205:
case 3907:
case 3504:
case 3057:
case 2810:
case 779:
case 292:
case 2117:
case 1561:
case 2136:
case 2528:
case 3649:
case 3301:
case 3242:
case 1539:
case 1766:
case 338:
case 1364:
case 3834:
case 3774:
case 3985:
case 3376:
case 1980:
case 3406:
case 1040:
case 717:
case 3688:
case 4083:
case 3162:
case 2325:
case 4015:
case 538:
case 3268:
case 3420:
case 2943:
case 3155:
case 1169:
case 377:
case 3009:
case 1150:
case 3959:
case 2072:
case 2015:
case 519:
case 1131:
case 1034:
case 583:
case 2761:
case 617:
case 2621:
case 3687:
case 3798:
case 1490:
case 1053:
case 2026:
case 605:
case 3821:
case 690:
case 2338:
case 3744:
case 3012:
case 1329:
case 2152:
case 714:
case 2969:
case 1735:
case 93:
case 471:
case 614:
case 2165:
case 1438:
case 2950:
case 2931:
case 2973:
case 2714:
case 790:
case 2888:
case 374:
case 2411:
case 70:
case 2245:
case 626:
case 1021:
case 151:
case 3853:
case 3454:
case 668:
case 1615:
case 463:
case 2068:
case 1683:
case 923:
case 3696:
case 876:
case 3610:
case 1875:
case 1279:
case 3178:
case 112:
case 3272:
case 3819:
case 954:
case 2209:
case 2805:
case 4068:
case 3663:
case 60:
case 1311:
case 623:
case 754:
case 428:
case 2724:
case 1233:
case 1442:
case 1271:
case 1353:
case 1370:
case 699:
case 1029:
case 472:
case 2038:
case 2284:
case 285:
case 3046:
case 3375:
case 3986:
case 3708:
case 2300:
case 3022:
case 799:
case 1319:
case 485:
case 228:
case 2854:
case 2090:
case 2565:
case 2201:
case 1543:
case 3606:
case 3713:
case 3488:
case 2276:
case 73:
case 3785:
case 3577:
case 2368:
case 1752:
case 1927:
case 1765:
case 2367:
case 397:
case 2135:
case 3760:
case 3620:
case 2421:
case 1114:
case 2895:
case 1011:
case 152:
case 3578:
case 63:
case 2692:
case 3850:
case 3157:
case 2328:
case 3094:
case 1564:
case 937:
case 3265:
case 1339:
case 1680:
case 721:
case 3048:
case 3613:
case 3706:
case 3988:
case 1361:
case 3873:
case 3584:
case 2921:
case 621:
case 4036:
case 2461:
case 2792:
case 1213:
case 3381:
case 2439:
case 1665:
case 3659:
case 1725:
case 2327:
case 1862:
case 330:
case 1428:
case 871:
case 476:
case 462:
case 1207:
case 3055:
case 1069:
case 863:
case 3109:
case 3608:
case 3486:
case 2115:
case 1900:
case 4003:
case 1134:
case 547:
case 2366:
case 530:
case 1942:
case 2525:
case 3145:
case 558:
case 3949:
case 707:
case 3089:
case 2277:
case 3576:
case 1208:
case 262:
case 276:
case 2970:
case 473:
case 907:
case 1039:
case 678:
case 2317:
case 3796:
case 1418:
case 3:
case 2028:
case 1061:
case 2911:
case 1164:
case 318:
case 3004:
case 2336:
case 2256:
case 949:
case 3348:
case 3591:
case 1223:
case 3101:
case 3623:
case 339:
case 3558:
case 59:
case 300:
case 3032:
case 2886:
case 2702:
case 395:
case 2318:
case 273:
case 3941:
case 116:
case 3184:
case 1230:
case 1350:
case 261:
case 539:
case 3644:
case 1534:
case 39:
case 3235:
case 3355:
case 88:
case 1369:
case 2515:
case 2066:
case 500:
case 1916:
case 637:
case 1804:
case 3199:
case 3698:
case 3509:
case 595:
case 1403:
case 2583:
case 1331:
case 1192:
case 3697:
case 2303:
case 740:
case 1298:
case 2614:
case 364:
case 3176:
case 1881:
case 2469:
case 1635:
case 518:
case 1832:
case 3545:
case 180:
case 3362:
case 2125:
case 487:
case 2779:
case 200:
case 3318:
case 373:
case 4:
case 3027:
case 916:
case 689:
case 2184:
case 1656:
case 418:
case 239:
case 2763:
case 2558:
case 1745:
case 1171:
case 713:
case 218:
case 3256:
case 1866:
case 2004:
case 107:
case 789:
case 2710:
case 2796:
case 2394:
case 4081:
case 2:
case 3469:
case 1827:
case 2545:
case 2362:
case 980:
case 2630:
case 1758:
case 3614:
case 3572:
case 3066:
case 2509:
case 924:
case 2199:
case 2698:
case 2861:
case 464:
case 2995:
case 1596:
case 1510:
case 1922:
case 2644:
case 1791:
case 2355:
case 756:
case 2235:
case 1533:
case 2381:
case 3439:
case 84:
case 3327:
case 2158:
case 724:
case 2660:
case 653:
case 458:
case 1374:
case 3461:
case 1776:
case 2047:
case 1803:
case 2280:
case 1404:
case 4047:
case 2882:
case 874:
case 3036:
case 576:
case 2988:
case 780:
case 2048:
case 409:
case 2831:
case 2850:
case 2191:
case 447:
case 1432:
case 1243:
case 2157:
case 3017:
case 2265:
case 2869:
case 1912:
case 1386:
case 1784:
case 3393:
case 1818:
case 2607:
case 1179:
case 1678:
case 3525:
case 2145:
case 616:
case 3953:
case 1520:
case 716:
case 1836:
case 3366:
case 3764:
case 3624:
case 1196:
case 1110:
case 1506:
case 1817:
case 2608:
case 2599:
case 1677:
case 845:
case 2486:
case 612:
case 2671:
case 328:
case 1264:
case 2633:
case 3565:
case 1559:
case 3342:
case 3453:
case 1560:
case 3201:
case 1095:
case 2156:
case 3300:
case 2022:
case 3037:
case 751:
case 2707:
case 3470:
case 4022:
case 3580:
case 3841:
case 3419:
case 126:
case 2986:
case 2708:
case 895:
case 1349:
case 58:
case 3664:
case 839:
case 3299:
case 114:
case 3421:
case 2487:
case 3961:
case 1197:
case 1507:
case 1054:
case 1890:
case 1904:
case 89:
case 3367:
case 38:
case 297:
case 3135:
case 2620:
case 497:
case 3368:
case 105:
case 1932:
case 911:
case 2225:
case 1144:
case 1041:
case 1292:
case 864:
case 2488:
case 2577:
case 1699:
case 2785:
case 2797:
case 1395:
case 3931:
case 2751:
case 274:
case 3714:
case 3042:
case 3982:
case 4012:
case 4075:
case 858:
case 3257:
case 3969:
case 1955:
case 2556:
case 13:
case 3291:
case 1523:
case 1658:
case 652:
case 44:
case 2322:
case 830:
case 1868:
case 3258:
case 3338:
case 1962:
case 2012:
case 2075:
case 1657:
case 3152:
case 1691:
case 1185:
case 3026:
case 2821:
case 3180:
case 2495:
case 474:
case 1234:
case 1088:
case 1756:
case 3535:
case 3640:
case 1530:
case 1645:
case 1551:
case 1994:
case 3602:
case 2178:
case 1107:
case 2441:
case 2819:
case 2215:
case 3067:
case 3805:
case 2870:
case 1341:
case 1598:
case 1108:
case 1609:
case 1202:
case 2610:
case 1947:
case 3411:
case 3245:
case 951:
case 3634:
case 1240:
case 1181:
case 2762:
case 1547:
case 1944:
case 1238:
case 588:
case 1084:
case 1358:
case 159:
case 16:
case 110:
case 3637:
case 2825:
case 2491:
case 2174:
case 1892:
case 3616:
case 3703:
case 1998:
case 1695:
case 3876:
case 4071:
case 1001:
case 3295:
case 194:
case 108:
case 533:
case 1237:
case 1357:
case 1930:
case 3638:
case 81:
case 815:
case 2409:
case 3483:
case 3884:
case 186:
case 3302:
case 1410:
case 4006:
case 0:
case 1076:
case 1562:
case 792:
case 3092:
case 279:
case 3736:
case 804:
case 1463:
case 898:
case 388:
case 2748:
case 1923:
case 1864:
case 2445:
case 646:
case 692:
case 1099:
case 2396:
case 2310:
case 3531:
case 165:
case 3573:
case 1309:
case 1641:
case 3582:
case 1605:
case 1786:
case 2977:
case 2574:
case 1802:
case 2401:
case 3845:
case 1226:
case 1840:
case 248:
case 1581:
case 2333:
case 1147:
case 3766:
case 3539:
case 3626:
case 1242:
case 1471:
case 138:
case 643:
case 1301:
case 1148:
case 946:
case 2484:
case 992:
case 1907:
case 1091:
case 3809:
case 1194:
case 2219:
case 2872:
case 1504:
case 1057:
case 270:
case 2079:
case 2732:
case 3858:
case 303:
case 1162:
case 4010:
case 3667:
case 3727:
case 1688:
case 1913:
case 2221:
case 1774:
case 2499:
case 1376:
case 1045:
case 855:
case 2476:
case 791:
case 3173:
case 3891:
case 1009:
case 177:
case 1267:
case 470:
case 2010:
case 3668:
case 3728:
case 1420:
case 501:
case 2023:
case 1814:
case 1056:
case 1413:
case 641:
case 1485:
case 2261:
case 3452:
case 3343:
case 817:
case 2360:
case 2632:
case 2359:
case 2239:
case 2681:
case 327:
case 460:
case 41:
case 3465:
case 1459:
case 3768:
case 1460:
case 3129:
case 3628:
case 1920:
case 920:
case 2385:
case 1575:
case 741:
case 3570:
case 2097:
case 2154:
case 2901:
case 2051:
case 3014:
case 1266:
case 3742:
case 793:
case 4044:
case 1378:
case 1705:
case 2588:
case 2307:
case 2477:
case 1408:
case 415:
case 2030:
case 1293:
case 996:
case 2044:
case 2775:
case 942:
case 2712:
case 1377:
case 2141:
case 2308:
case 1407:
case 629:
case 3324:
case 2098:
case 1933:
case 4051:
case 3666:
case 3726:
case 527:
case 2647:
case 1754:
case 25:
case 1236:
case 857:
case 796:
case 1217:
case 3878:
case 3043:
case 3983:
case 3618:
case 2105:
case 2060:
case 175:
case 993:
case 3877:
case 3617:
case 4060:
case 1175:
case 2149:
case 2648:
case 929:
case 1824:
case 1963:
case 2456:
case 3529:
case 3153:
case 1546:
case 469:
case 45:
case 455:
case 720:
case 234:
case 3790:
case 2397:
case 2689:
case 2351:
case 302:
case 1843:
case 941:
case 2722:
case 1444:
case 684:
case 2269:
case 2865:
case 2991:
case 1078:
case 2554:
case 2655:
case 3435:
case 2958:
case 2344:
case 2746:
case 1077:
case 784:
case 2008:
case 2852:
case 1497:
case 620:
case 3024:
case 2187:
case 144:
case 2880:
case 3121:
case 1080:
case 3945:
case 1247:
case 2153:
case 1126:
case 975:
case 836:
case 1808:
case 1052:
case 4043:
case 2915:
case 1065:
case 3909:
case 2878:
case 555:
case 1807:
case 2983:
case 982:
case 2618:
case 2043:
case 3595:
case 3060:
case 3647:
case 1248:
case 1537:
case 1289:
case 1631:
case 1673:
case 3187:
case 1813:
case 944:
case 667:
case 2121:
case 1168:
case 1669:
case 2435:
case 3344:
case 231:
case 2738:
case 1167:
case 2511:
case 3250:
case 3662:
case 141:
case 3330:
case 1859:
case 2737:
case 431:
case 3007:
case 3991:
case 2314:
case 3282:
case 2603:
case 781:
case 3689:
case 4024:
case 3231:
case 3351:
case 3273:
case 77:
case 1661:
case 2274:
case 2570:
case 1992:
case 1380:
case 1639:
case 1526:
case 644:
case 1281:
case 967:
case 2465:
case 2129:
case 504:
case 2628:
case 981:
case 427:
case 1232:
case 806:
case 1443:
case 120:
case 2343:
case 3632:
case 1830:
case 2627:
case 2767:
case 1365:
case 227:
case 3505:
case 2480:
case 2519:
case 1897:
case 3999:
case 3261:
case 1753:
case 3098:
case 675:
case 1568:
case 3044:
case 2521:
case 3984:
case 3308:
case 142:
case 3712:
case 2286:
case 3141:
case 1770:
case 1035:
case 2700:
case 2693:
case 1823:
case 1964:
case 2014:
case 2742:
case 1896:
case 146:
case 1810:
case 3612:
case 2809:
case 2205:
case 3219:
case 3815:
case 570:
case 2766:
case 2364:
case 357:
case 3401:
case 686:
case 1464:
case 348:
case 2642:
case 1527:
case 3253:
case 1863:
case 3371:
case 1924:
case 3333:
case 1118:
case 1619:
case 2600:
case 983:
case 977:
case 1739:
case 1566:
case 3096:
case 2668:
case 1083:
case 1761:
case 1621:
case 2182:
case 3704:
case 1492:
case 2288:
case 610:
case 66:
case 2392:
case 659:
case 3063:
case 1103:
case 3320:
case 2952:
case 3079:
case 3732:
case 708:
case 203:
case 557:
case 2858:
case 2727:
case 1769:
case 827:
case 1128:
case 1629:
case 3458:
case 317:
case 3646:
case 579:
case 2638:
case 1731:
case 2295:
case 2899:
case 677:
case 1782:
case 2161:
case 1914:
case 2616:
case 3071:
case 3789:
case 777:
case 1820:
case 3622:
case 42:
case 3491:
case 3825:
case 1402:
case 3396:
case 1315:
case 1372:
case 2582:
case 2736:
case 2569:
case 3956:
case 2254:
case 1440:
case 3445:
case 2801:
case 4092:
case 2550:
case 1611:
case 3747:
case 683:
case 2092:
case 517:
case 379:
case 1833:
case 3363:
case 1871:
case 2415:
case 3186:
case 2241:
case 1193:
case 3409:
case 1503:
case 738:
case 233:
case 2718:
case 225:
case 1037:
case 2319:
case 3778:
case 1470:
case 3475:
case 1300:
case 4029:
case 645:
case 505:
case 128:
case 1090:
case 3559:
case 1016:
case 1453:
case 1342:
case 1724:
case 2353:
case 2442:
case 368:
case 745:
case 1326:
case 3349:
case 1284:
case 185:
case 2400:
case 2029:
case 1580:
case 1419:
case 3513:
case 816:
case 2928:
case 1743:
case 2468:
case 411:
case 2765:
case 1367:
case 1939:
case 3388:
case 526:
case 2206:
case 3904:
case 1692:
case 3676:
case 1299:
case 1895:
case 2011:
case 3198:
case 50:
case 64:
case 2780:
case 3292:
case 2467:
case 305:
case 1368:
case 3932:
case 3446:
case 599:
case 1165:
case 3159:
case 3658:
case 4070:
case 1337:
case 2143:
case 1257:
case 1291:
case 33:
case 1714:
case 697:
case 1042:
case 1931:
case 3113:
case 797:
case 554:
case 1180:
case 2053:
case 2416:
case 2329:
case 94:
case 2437:
case 171:
case 3422:
case 1338:
case 2917:
case 1067:
case 212:
case 1209:
case 3800:
case 3994:
case 2296:
case 2210:
case 3645:
case 3530:
case 2311:
case 4021:
case 2936:
case 3756:
case 1634:
case 889:
case 1849:
case 2124:
case 3544:
case 251:
case 2918:
case 3202:
case 335:
case 2279:
case 2875:
case 2615:
case 3598:
case 3341:
case 3171:
case 3448:
case 4061:
case 216:
case 1027:
case 1886:
case 1702:
case 995:
case 3893:
case 416:
case 1028:
case 307:
case 2039:
case 2772:
case 3866:
case 349:
case 1256:
case 521:
case 2223:
case 1734:
case 2061:
case 1911:
case 918:
case 1482:
case 2192:
case 253:
case 2502:
case 1473:
case 758:
case 2832:
case 3086:
case 811:
case 1929:
case 187:
case 99:
case 3791:
case 2369:
case 2937:
case 3922:
case 161:
case 3828:
case 3462:
case 2251:
case 2373:
case 3489:
case 2331:
case 2297:
case 852:
case 1515:
case 658:
case 2916:
case 2382:
case 3214:
case 730:
case 2403:
case 2213:
case 256:
case 3374:
case 2889:
case 2285:
case 3776:
case 1461:
case 2428:
case 3533:
case 947:
case 2725:
case 664:
case 1327:
case 2564:
case 2259:
case 2855:
case 2339:
case 3481:
case 2967:
case 1017:
case 1328:
case 3432:
case 2361:
case 2680:
case 600:
case 2140:
case 2926:
case 7:
case 2466:
case 3224:
case 289:
case 3179:
case 3678:
case 718:
case 2592:
case 2102:
case 1277:
case 3912:
case 1393:
case 3818:
case 176:
case 3677:
case 2493:
case 413:
case 1172:
case 2894:
case 618:
case 3110:
case 1278:
case 1183:
case 2069:
case 1366:
case 2942:
case 2082:
case 3836:
case 1624:
case 1764:
case 700:
case 378:
case 2073:
case 489:
case 3701:
case 2134:
case 1873:
case 2799:
case 513:
case 1685:
case 687:
case 1613:
case 1988:
case 3427:
case 3564:
case 158:
case 3339:
case 2481:
case 83:
case 1869:
case 3855:
case 1501:
case 3260:
case 1191:
case 589:
case 1157:
case 1332:
case 1252:
case 130:
case 3862:
case 3968:
case 437:
case 440:
case 3725:
case 1158:
case 1659:
case 3665:
case 761:
case 2803:
case 2374:
case 356:
case 1584:
case 1987:
case 3889:
case 3285:
case 2776:
case 2836:
case 3942:
case 278:
case 3848:
case 3031:
case 3134:
case 1109:
case 3493:
case 2677:
case 2196:
case 3207:
case 1905:
case 422:
case 1607:
case 3102:
case 3592:
case 313:
case 835:
case 3208:
case 1576:
case 1062:
case 823:
case 976:
case 2818:
case 3140:
case 478:
case 2163:
case 2520:
case 899:
case 3926:
case 1145:
case 1771:
case 2224:
case 3466:
case 2866:
case 762:
case 1004:
case 1954:
case 3223:
case 4074:
case 1591:
case 1348:
case 3164:
case 207:
case 2709:
case 3039:
case 80:
case 3417:
case 1081:
case 1941:
case 316:
case 2494:
case 1032:
case 195:
case 2893:
case 973:
case 676:
case 2745:
case 2171:
case 868:
case 1623:
case 139:
case 1763:
case 3251:
case 1861:
case 3373:
case 2106:
case 516:
case 3382:
case 1509:
case 3403:
case 324:
case 1199:
case 1698:
case 19:
case 3534:
case 2757:
case 1355:
case 1839:
case 1235:
case 3230:
case 1545:
case 2946:
case 380:
case 1362:
case 1630:
case 2758:
case 3244:
case 221:
case 890:
case 2455:
case 2120:
case 3881:
case 3635:
case 2827:
case 164:
case 3502:
case 1651:
case 353:
case 2657:
case 3329:
case 1744:
case 2868:
case 971:
case 2422:
case 2962:
case 1346:
case 1075:
case 2049:
case 512:
case 78:
case 2989:
case 2113:
case 1495:
case 2185:
case 174:
case 68:
case 2395:
case 1751:
case 2658:
case 3438:
case 1322:
case 1556:
case 3735:
case 2005:
case 2523:
case 223:
case 3683:
case 2202:
case 1610:
case 3875:
case 3812:
case 3672:
case 3615:
case 2108:
case 1853:
case 3263:
case 772:
case 2826:
case 666:
case 2645:
case 1723:
case 2088:
case 2354:
case 3936:
case 4087:
case 878:
case 785:
case 2842:
case 1215:
case 1819:
case 435:
case 254:
case 963:
case 2551:
case 2800:
case 2994:
case 1283:
case 822:
case 2597:
case 3210:
case 3296:
case 145:
case 2107:
case 40:
case 2585:
case 1046:
case 1312:
case 1405:
case 3370:
case 3029:
case 3353:
case 4095:
case 763:
case 2349:
case 2601:
case 2095:
case 1449:
case 1811:
case 3543:
case 1156:
case 928:
case 1633:
case 849:
case 3966:
case 3319:
case 20:
case 1707:
case 2305:
case 2778:
case 2684:
case 2412:
case 1022:
case 311:
case 2144:
case 2041:
case 2981:
case 2838:
case 205:
case 3846:
case 3220:
case 3752:
case 2932:
case 2699:
case 671:
case 1785:
case 1713:
case 414:
case 2292:
case 3780:
case 1578:
case 2197:
case 3206:
case 2904:
case 2151:
case 2816:
case 3114:
case 3011:
case 1487:
case 1620:
case 1760:
case 1759:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757696401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,];
var gg_b = "1757696401/";

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
