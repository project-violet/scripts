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
case 788:
case 2271:
case 1279:
case 2305:
case 3057:
case 3703:
case 1172:
case 1537:
case 439:
case 806:
case 177:
case 2623:
case 1897:
case 3387:
case 1717:
case 3987:
case 1610:
case 1060:
case 397:
case 337:
case 96:
case 1848:
case 1569:
case 2561:
case 3917:
case 1680:
case 2658:
case 3133:
case 3317:
case 1625:
case 3846:
case 1219:
case 2211:
case 764:
case 1112:
case 3904:
case 1196:
case 338:
case 171:
case 398:
case 2121:
case 1543:
case 2042:
case 305:
case 3616:
case 3692:
case 1222:
case 1801:
case 2809:
case 596:
case 536:
case 884:
case 1777:
case 1670:
case 2360:
case 2236:
case 1182:
case 2960:
case 1688:
case 2463:
case 3406:
case 2650:
case 787:
case 1289:
case 3147:
case 3977:
case 56:
case 3631:
case 867:
case 3377:
case 30:
case 2294:
case 3686:
case 263:
case 2165:
case 2570:
case 2643:
case 526:
case 3093:
case 1875:
case 1853:
case 1319:
case 2311:
case 2429:
case 2079:
case 3826:
case 312:
case 2873:
case 2482:
case 700:
case 3722:
case 2051:
case 1059:
case 1645:
case 1163:
case 1828:
case 321:
case 2936:
case 1550:
case 2108:
case 557:
case 1389:
case 2381:
case 3899:
case 2981:
case 4055:
case 2855:
case 882:
case 1149:
case 2141:
case 4083:
case 3751:
case 2883:
case 1523:
case 2472:
case 2730:
case 1979:
case 2971:
case 1379:
case 2205:
case 558:
case 2019:
case 1011:
case 510:
case 429:
case 2813:
case 1951:
case 2525:
case 3038:
case 1351:
case 1820:
case 2669:
case 1661:
case 2580:
case 1558:
case 1036:
case 3854:
case 551:
case 2089:
case 1081:
case 663:
case 3779:
case 2633:
case 3805:
case 264:
case 309:
case 3652:
case 1156:
case 2444:
case 1527:
case 3283:
case 3001:
case 287:
case 2176:
case 2254:
case 1762:
case 1635:
case 116:
case 3040:
case 2817:
case 2690:
case 2797:
case 688:
case 2946:
case 3563:
case 1124:
case 2506:
case 2804:
case 4004:
case 152:
case 2186:
case 77:
case 1214:
case 435:
case 3445:
case 3909:
case 687:
case 2740:
case 2647:
case 3097:
case 466:
case 2116:
case 281:
case 401:
case 3860:
case 279:
case 3048:
case 3255:
case 4077:
case 43:
case 664:
case 775:
case 2877:
case 2701:
case 1284:
case 1914:
case 1431:
case 1547:
case 3102:
case 2424:
case 1486:
case 3209:
case 3608:
case 1606:
case 2775:
case 2926:
case 3085:
case 1838:
case 3596:
case 1416:
case 3512:
case 3894:
case 1984:
case 3714:
case 3732:
case 3418:
case 313:
case 1991:
case 2467:
case 3534:
case 3143:
case 3955:
case 2753:
case 2007:
case 3529:
case 2399:
case 1974:
case 1374:
case 2720:
case 859:
case 3383:
case 3075:
case 3983:
case 1713:
case 763:
case 154:
case 3707:
case 3262:
case 3600:
case 1533:
case 2715:
case 3913:
case 3859:
case 3313:
case 4095:
case 1476:
case 246:
case 662:
case 3410:
case 200:
case 1590:
case 480:
case 3774:
case 2535:
case 3478:
case 2664:
case 572:
case 1830:
case 2091:
case 1099:
case 1307:
case 3577:
case 2153:
case 3638:
case 3743:
case 3239:
case 2345:
case 2689:
case 1681:
case 149:
case 1636:
case 1865:
case 1302:
case 527:
case 2270:
case 1343:
case 2622:
case 2128:
case 1440:
case 556:
case 928:
case 702:
case 747:
case 310:
case 3806:
case 3267:
case 3702:
case 3184:
case 4063:
case 825:
case 2037:
case 1173:
case 2218:
case 3504:
case 1611:
case 2619:
case 1369:
case 1497:
case 2225:
case 2961:
case 3944:
case 3517:
case 760:
case 2568:
case 1258:
case 512:
case 2280:
case 2651:
case 3630:
case 1183:
case 357:
case 1841:
case 2115:
case 3174:
case 2462:
case 3256:
case 1503:
case 521:
case 748:
case 3446:
case 2043:
case 956:
case 2505:
case 2185:
case 459:
case 1937:
case 1671:
case 3835:
case 3666:
case 2197:
case 2050:
case 531:
case 3356:
case 914:
case 4072:
case 2872:
case 3086:
case 3595:
case 2483:
case 1668:
case 2925:
case 3723:
case 937:
case 2776:
case 1551:
case 2261:
case 1958:
case 176:
case 1162:
case 36:
case 1852:
case 2571:
case 1579:
case 538:
case 619:
case 1605:
case 3454:
case 2378:
case 1018:
case 2910:
case 2310:
case 3758:
case 505:
case 365:
case 2413:
case 3092:
case 1485:
case 1323:
case 1109:
case 2536:
case 90:
case 2988:
case 1350:
case 4029:
case 1767:
case 89:
case 2829:
case 1660:
case 4034:
case 2834:
case 991:
case 514:
case 4012:
case 2812:
case 2792:
case 2245:
case 1080:
case 3339:
case 3324:
case 3939:
case 2455:
case 2511:
case 71:
case 2140:
case 1078:
case 3657:
case 3750:
case 835:
case 1428:
case 1243:
case 786:
case 938:
case 2786:
case 2023:
case 2882:
case 1522:
case 123:
case 4082:
case 45:
case 3212:
case 2684:
case 647:
case 260:
case 3845:
case 1626:
case 2064:
case 248:
case 2691:
case 3229:
case 3628:
case 3234:
case 1457:
case 455:
case 3675:
case 1247:
case 2477:
case 2027:
case 3282:
case 3363:
case 2906:
case 2765:
case 2306:
case 192:
case 3000:
case 2487:
case 3620:
case 641:
case 2844:
case 3861:
case 1290:
case 2546:
case 3685:
case 145:
case 2193:
case 1364:
case 2235:
case 1964:
case 3949:
case 2607:
case 3405:
case 3468:
case 829:
case 3615:
case 2130:
case 570:
case 1327:
case 1466:
case 124:
case 1006:
case 3151:
case 3764:
case 2741:
case 1749:
case 247:
case 202:
case 660:
case 482:
case 3733:
case 2335:
case 1264:
case 1187:
case 215:
case 374:
case 1507:
case 3142:
case 3972:
case 1646:
case 3372:
case 1990:
case 604:
case 719:
case 3880:
case 1430:
case 194:
case 468:
case 3878:
case 1117:
case 1933:
case 899:
case 3810:
case 2166:
case 286:
case 406:
case 1227:
case 1876:
case 3555:
case 3411:
case 3912:
case 61:
case 3573:
case 3396:
case 2526:
case 118:
case 3312:
case 1584:
case 3640:
case 2157:
case 1831:
case 2839:
case 2090:
case 4039:
case 150:
case 204:
case 509:
case 1734:
case 2206:
case 3481:
case 369:
case 1729:
case 2721:
case 3263:
case 122:
case 1177:
case 2033:
case 1532:
case 3798:
case 3870:
case 1347:
case 3382:
case 1892:
case 1816:
case 1796:
case 3982:
case 1712:
case 94:
case 2161:
case 1600:
case 3893:
case 2297:
case 2315:
case 2458:
case 463:
case 1480:
case 945:
case 3099:
case 3907:
case 1478:
case 3590:
case 2423:
case 3476:
case 1572:
case 1137:
case 1913:
case 629:
case 1488:
case 2663:
case 229:
case 2353:
case 2799:
case 3773:
case 932:
case 725:
case 1015:
case 2375:
case 2201:
case 170:
case 3314:
case 847:
case 802:
case 3914:
case 2521:
case 1529:
case 3391:
case 1881:
case 2889:
case 1534:
case 1355:
case 3991:
case 1665:
case 3598:
case 1836:
case 113:
case 3054:
case 1418:
case 1714:
case 330:
case 3984:
case 3384:
case 2013:
case 3492:
case 1373:
case 545:
case 1309:
case 2188:
case 47:
case 1909:
case 2508:
case 517:
case 1445:
case 81:
case 2682:
case 3214:
case 534:
case 352:
case 239:
case 299:
case 3139:
case 2402:
case 708:
case 2062:
case 3857:
case 79:
case 475:
case 73:
case 2340:
case 815:
case 243:
case 1255:
case 950:
case 1048:
case 3291:
case 2629:
case 2228:
case 1283:
case 2009:
case 3527:
case 2997:
case 2469:
case 804:
case 4042:
case 511:
case 3274:
case 2500:
case 917:
case 2180:
case 522:
case 1362:
case 1868:
case 2672:
case 2220:
case 639:
case 1213:
case 2285:
case 1040:
case 316:
case 3866:
case 2948:
case 3762:
case 707:
case 2803:
case 742:
case 1123:
case 3379:
case 680:
case 462:
case 3149:
case 3795:
case 2490:
case 3242:
case 593:
case 156:
case 4074:
case 225:
case 2930:
case 2266:
case 2330:
case 1854:
case 2433:
case 3820:
case 3351:
case 1995:
case 1038:
case 1395:
case 3951:
case 2832:
case 2498:
case 4032:
case 128:
case 62:
case 3319:
case 1789:
case 2257:
case 803:
case 2592:
case 4014:
case 2711:
case 1030:
case 3389:
case 625:
case 3550:
case 121:
case 446:
case 280:
case 2447:
case 2938:
case 949:
case 2586:
case 112:
case 601:
case 3801:
case 1198:
case 353:
case 1692:
case 3129:
case 198:
case 464:
case 371:
case 63:
case 138:
case 3196:
case 389:
case 69:
case 2667:
case 3465:
case 2957:
case 3005:
case 3408:
case 1377:
case 1631:
case 3289:
case 3502:
case 3688:
case 695:
case 1066:
case 3182:
case 3704:
case 487:
case 378:
case 1987:
case 607:
case 266:
case 2293:
case 3897:
case 3942:
case 1676:
case 523:
case 2768:
case 377:
case 2464:
case 488:
case 3537:
case 3172:
case 1703:
case 1057:
case 799:
case 1846:
case 114:
case 1742:
case 3625:
case 1133:
case 1317:
case 1295:
case 23:
case 2077:
case 29:
case 3680:
case 1544:
case 3848:
case 2230:
case 976:
case 2366:
case 2705:
case 3400:
case 2656:
case 137:
case 58:
case 3584:
case 1747:
case 2072:
case 318:
case 3886:
case 1573:
case 2422:
case 3782:
case 1912:
case 2321:
case 3591:
case 1329:
case 1411:
case 1934:
case 920:
case 1555:
case 2921:
case 1929:
case 3035:
case 516:
case 2850:
case 4050:
case 3998:
case 1982:
case 3796:
case 311:
case 3816:
case 1382:
case 3947:
case 3514:
case 3347:
case 864:
case 1798:
case 1436:
case 784:
case 322:
case 2553:
case 169:
case 1481:
case 3734:
case 1880:
case 3390:
case 879:
case 2520:
case 916:
case 2858:
case 881:
case 3990:
case 2585:
case 3493:
case 419:
case 1513:
case 3507:
case 2479:
case 1471:
case 1021:
case 2029:
case 174:
case 3187:
case 3264:
case 1733:
case 2451:
case 740:
case 2082:
case 317:
case 2515:
case 4023:
case 888:
case 3933:
case 768:
case 1878:
case 2662:
case 2200:
case 2352:
case 394:
case 552:
case 985:
case 3654:
case 1065:
case 2548:
case 1405:
case 3964:
case 683:
case 2941:
case 3364:
case 1179:
case 3290:
case 4069:
case 1620:
case 1861:
case 3233:
case 3195:
case 2159:
case 2900:
case 782:
case 3006:
case 2063:
case 1562:
case 2252:
case 34:
case 862:
case 3327:
case 3927:
case 1008:
case 1615:
case 2365:
case 3457:
case 930:
case 1234:
case 4002:
case 2965:
case 990:
case 3763:
case 172:
case 800:
case 2049:
case 846:
case 3298:
case 2655:
case 2673:
case 1845:
case 1119:
case 2111:
case 2540:
case 1296:
case 1653:
case 392:
case 7:
case 1363:
case 403:
case 1282:
case 1509:
case 2501:
case 2308:
case 1189:
case 2181:
case 1675:
case 684:
case 2677:
case 1924:
case 1339:
case 2986:
case 3475:
case 261:
case 415:
case 3821:
case 3660:
case 3767:
case 3350:
case 2898:
case 971:
case 2392:
case 1076:
case 2992:
case 2916:
case 667:
case 240:
case 3724:
case 2484:
case 486:
case 3739:
case 1750:
case 3078:
case 1657:
case 41:
case 2788:
case 2491:
case 1499:
case 2604:
case 1367:
case 268:
case 2474:
case 3358:
case 2617:
case 3162:
case 2039:
case 2890:
case 3958:
case 376:
case 3551:
case 3269:
case 1723:
case 3668:
case 578:
case 1356:
case 606:
case 2530:
case 3088:
case 977:
case 2376:
case 3485:
case 3923:
case 2976:
case 1758:
case 3070:
case 553:
case 284:
case 2146:
case 589:
case 2407:
case 3852:
case 571:
case 3503:
case 1256:
case 3841:
case 448:
case 1630:
case 3045:
case 2695:
case 1517:
case 3969:
case 3497:
case 682:
case 460:
case 1344:
case 3337:
case 2:
case 441:
case 759:
case 3448:
case 2154:
case 4027:
case 1769:
case 2827:
case 1693:
case 1107:
case 1446:
case 3542:
case 3902:
case 3636:
case 1114:
case 349:
case 3681:
case 2231:
case 3401:
case 3694:
case 2286:
case 173:
case 3611:
case 158:
case 3173:
case 402:
case 447:
case 2557:
case 1267:
case 1806:
case 2292:
case 333:
case 2745:
case 3943:
case 3155:
case 1191:
case 3311:
case 454:
case 3079:
case 1781:
case 2789:
case 3434:
case 1498:
case 1832:
case 1736:
case 1794:
case 503:
case 3496:
case 2093:
case 3738:
case 627:
case 3260:
case 3588:
case 2719:
case 1711:
case 3855:
case 3108:
case 3381:
case 2826:
case 1884:
case 1531:
case 1447:
case 1106:
case 3371:
case 3019:
case 3637:
case 3578:
case 2435:
case 903:
case 612:
case 1490:
case 1874:
case 3141:
case 2164:
case 1576:
case 1393:
case 621:
case 4054:
case 2127:
case 227:
case 2779:
case 1266:
case 2556:
case 628:
case 3100:
case 3959:
case 2395:
case 3580:
case 3669:
case 3623:
case 2676:
case 1768:
case 195:
case 2987:
case 1293:
case 691:
case 1135:
case 2703:
case 3862:
case 3766:
case 1004:
case 60:
case 1464:
case 452:
case 1427:
case 2295:
case 3658:
case 1077:
case 3259:
case 3561:
case 638:
case 19:
case 214:
case 375:
case 4046:
case 2742:
case 3152:
case 237:
case 1656:
case 297:
case 605:
case 1230:
case 1366:
case 1705:
case 205:
case 485:
case 3121:
case 3042:
case 2198:
case 697:
case 709:
case 1957:
case 2304:
case 1667:
case 1624:
case 2977:
case 2686:
case 3294:
case 231:
case 291:
case 3650:
case 2147:
case 3463:
case 2066:
case 84:
case 2791:
case 1953:
case 502:
case 2811:
case 4011:
case 1450:
case 129:
case 2488:
case 3074:
case 3424:
case 270:
case 2784:
case 2102:
case 1726:
case 2608:
case 1375:
case 2209:
case 2582:
case 2015:
case 2418:
case 2665:
case 213:
case 845:
case 2732:
case 4081:
case 2955:
case 2143:
case 3399:
case 2881:
case 3007:
case 2534:
case 3467:
case 2085:
case 2596:
case 3775:
case 2973:
case 2470:
case 2714:
case 2600:
case 1552:
case 3456:
case 2053:
case 2707:
case 1879:
case 2871:
case 4071:
case 2169:
case 1161:
case 3627:
case 947:
case 3785:
case 1315:
case 1297:
case 2425:
case 2075:
case 2383:
case 3354:
case 2028:
case 2478:
case 3535:
case 3091:
case 670:
case 1055:
case 2641:
case 2313:
case 1073:
case 2572:
case 2913:
case 2410:
case 1320:
case 3246:
case 1920:
case 1842:
case 822:
case 1746:
case 1009:
case 2001:
case 1397:
case 1215:
case 1180:
case 2962:
case 738:
case 3633:
case 3748:
case 811:
case 1500:
case 364:
case 471:
case 3817:
case 4068:
case 850:
case 387:
case 1437:
case 1541:
case 3254:
case 791:
case 1110:
case 1348:
case 2445:
case 904:
case 1188:
case 894:
case 1301:
case 2909:
case 2150:
case 1901:
case 834:
case 1402:
case 3506:
case 1062:
case 1253:
case 817:
case 139:
case 477:
case 609:
case 143:
case 714:
case 1340:
case 3877:
case 1696:
case 1443:
case 2860:
case 2621:
case 1629:
case 515:
case 379:
case 4060:
case 1228:
case 3116:
case 1634:
case 3192:
case 1565:
case 3299:
case 737:
case 1170:
case 2244:
case 2723:
case 3483:
case 2086:
case 2595:
case 3325:
case 3872:
case 1617:
case 3980:
case 1474:
case 26:
case 3380:
case 878:
case 2031:
case 1039:
case 4035:
case 167:
case 2956:
case 871:
case 236:
case 1687:
case 3910:
case 1780:
case 2016:
case 265:
case 1593:
case 2092:
case 1976:
case 1725:
case 184:
case 1067:
case 1386:
case 3896:
case 1538:
case 319:
case 575:
case 3812:
case 3594:
case 2324:
case 1677:
case 1770:
case 2939:
case 1931:
case 1331:
case 2339:
case 2924:
case 665:
case 3388:
case 3536:
case 161:
case 3834:
case 3370:
case 57:
case 1484:
case 106:
case 2426:
case 3023:
case 3882:
case 1316:
case 3511:
case 434:
case 1491:
case 2367:
case 3140:
case 3318:
case 2750:
case 1788:
case 3689:
case 2132:
case 2577:
case 3409:
case 1044:
case 3345:
case 1231:
case 3153:
case 2743:
case 445:
case 2638:
case 3863:
case 4006:
case 2504:
case 3619:
case 3218:
case 182:
case 3622:
case 3270:
case 657:
case 3128:
case 1216:
case 257:
case 3115:
case 1864:
case 3849:
case 2737:
case 3002:
case 2174:
case 772:
case 3225:
case 15:
case 2517:
case 3361:
case 2344:
case 3651:
case 3120:
case 492:
case 3679:
case 432:
case 3278:
case 2446:
case 2107:
case 3210:
case 2587:
case 2769:
case 303:
case 1154:
case 1012:
case 1105:
case 2880:
case 1520:
case 3098:
case 1241:
case 3554:
case 3335:
case 820:
case 2733:
case 3935:
case 581:
case 2021:
case 1034:
case 579:
case 274:
case 386:
case 852:
case 2790:
case 2103:
case 1082:
case 3495:
case 964:
case 2583:
case 1168:
case 588:
case 1735:
case 31:
case 3526:
case 2396:
case 2573:
case 816:
case 2912:
case 981:
case 3090:
case 2640:
case 3824:
case 2747:
case 2934:
case 587:
case 1419:
case 1921:
case 2929:
case 2334:
case 2870:
case 674:
case 4070:
case 988:
case 1160:
case 2982:
case 796:
case 3867:
case 1489:
case 2436:
case 885:
case 4018:
case 3404:
case 1655:
case 2628:
case 757:
case 1965:
case 360:
case 2212:
case 500:
case 2296:
case 3708:
case 4045:
case 2845:
case 2963:
case 1194:
case 3138:
case 2460:
case 2189:
case 1308:
case 1843:
case 1908:
case 3614:
case 183:
case 2282:
case 3477:
case 1501:
case 2509:
case 2949:
case 3607:
case 3700:
case 830:
case 3193:
case 890:
case 2349:
case 900:
case 2620:
case 4061:
case 3487:
case 773:
case 1613:
case 1252:
case 2562:
case 302:
case 347:
case 1300:
case 1900:
case 1159:
case 3741:
case 2764:
case 2008:
case 2468:
case 1597:
case 672:
case 399:
case 68:
case 188:
case 1186:
case 3062:
case 777:
case 3402:
case 1506:
case 1740:
case 1647:
case 3901:
case 3275:
case 3188:
case 3682:
case 616:
case 3508:
case 2291:
case 3565:
case 1192:
case 1116:
case 437:
case 3629:
case 220:
case 414:
case 2284:
case 3612:
case 2167:
case 3340:
case 1226:
case 3118:
case 3940:
case 438:
case 3500:
case 1748:
case 1633:
case 620:
case 771:
case 1444:
case 2527:
case 3397:
case 869:
case 285:
case 405:
case 753:
case 2207:
case 3110:
case 3348:
case 1254:
case 3541:
case 2564:
case 431:
case 3672:
case 1817:
case 40:
case 652:
case 1690:
case 3297:
case 3315:
case 2974:
case 1720:
case 3458:
case 1014:
case 2533:
case 2144:
case 3754:
case 559:
case 254:
case 690:
case 630:
case 1456:
case 3552:
case 3920:
case 146:
case 100:
case 2783:
case 3851:
case 3985:
case 3423:
case 3649:
case 3055:
case 1091:
case 2099:
case 2307:
case 421:
case 1535:
case 2486:
case 3083:
case 3726:
case 2431:
case 329:
case 2932:
case 3953:
case 3353:
case 162:
case 654:
case 2384:
case 290:
case 230:
case 1775:
case 4038:
case 3240:
case 1326:
case 2492:
case 2991:
case 1999:
case 2391:
case 427:
case 2196:
case 836:
case 3760:
case 409:
case 896:
case 1211:
case 2219:
case 3357:
case 2465:
case 865:
case 2801:
case 2222:
case 253:
case 2777:
case 2543:
case 968:
case 1042:
case 2129:
case 2688:
case 1463:
case 1650:
case 1281:
case 2289:
case 278:
case 567:
case 2182:
case 342:
case 2704:
case 1294:
case 2408:
case 1545:
case 3238:
case 2840:
case 677:
case 1449:
case 2172:
case 277:
case 568:
case 1766:
case 752:
case 1862:
case 1905:
case 540:
case 678:
case 3293:
case 506:
case 3768:
case 395:
case 335:
case 984:
case 1623:
case 3705:
case 3366:
case 2903:
case 2303:
case 3230:
case 2848:
case 2060:
case 561:
case 653:
case 301:
case 2400:
case 1152:
case 1368:
case 175:
case 1259:
case 2569:
case 2787:
case 1561:
case 1658:
case 3427:
case 720:
case 810:
case 9:
case 1883:
case 1022:
case 858:
case 325:
case 3490:
case 1510:
case 1578:
case 2979:
case 1971:
case 1637:
case 1019:
case 2011:
case 1371:
case 2661:
case 2820:
case 3644:
case 1580:
case 1268:
case 1525:
case 730:
case 4085:
case 1813:
case 1959:
case 1793:
case 1359:
case 790:
case 873:
case 3807:
case 2081:
case 2203:
case 3930:
case 2452:
case 3771:
case 413:
case 2036:
case 555:
case 1738:
case 4075:
case 3516:
case 2322:
case 3814:
case 1165:
case 3794:
case 3736:
case 754:
case 826:
case 3498:
case 1518:
case 2919:
case 1911:
case 3257:
case 2853:
case 4053:
case 2421:
case 3447:
case 3531:
case 2163:
case 3884:
case 1394:
case 3095:
case 3586:
case 2059:
case 2645:
case 2389:
case 1381:
case 3891:
case 2989:
case 2828:
case 1336:
case 1588:
case 4028:
case 2550:
case 1936:
case 2290:
case 1546:
case 245:
case 813:
case 692:
case 1487:
case 473:
case 1235:
case 451:
case 1700:
case 1607:
case 3941:
case 1417:
case 2327:
case 24:
case 3683:
case 1130:
case 1741:
case 3159:
case 3900:
case 2233:
case 870:
case 102:
case 3063:
case 410:
case 3673:
case 1708:
case 2626:
case 624:
case 1684:
case 3802:
case 3706:
case 2457:
case 3655:
case 457:
case 2298:
case 64:
case 3501:
case 3136:
case 383:
case 3843:
case 2247:
case 3308:
case 1138:
case 232:
case 141:
case 3194:
case 645:
case 3265:
case 1599:
case 3321:
case 3419:
case 617:
case 2998:
case 2035:
case 1157:
case 634:
case 1090:
case 1839:
case 2104:
case 2782:
case 4086:
case 3422:
case 3072:
case 2177:
case 222:
case 2734:
case 104:
case 2729:
case 3553:
case 999:
case 211:
case 2892:
case 3208:
case 2347:
case 2947:
case 809:
case 436:
case 1856:
case 3479:
case 611:
case 2187:
case 3241:
case 3520:
case 543:
case 3105:
case 2646:
case 622:
case 2493:
case 3585:
case 3662:
case 2117:
case 618:
case 234:
case 650:
case 3168:
case 599:
case 4076:
case 3515:
case 2772:
case 723:
case 1047:
case 2574:
case 186:
case 821:
case 3695:
case 2258:
case 1568:
case 2045:
case 1651:
case 2659:
case 2369:
case 1961:
case 1225:
case 2497:
case 1462:
case 812:
case 1002:
case 92:
case 633:
case 3864:
case 693:
case 2841:
case 1115:
case 3154:
case 103:
case 3827:
case 1210:
case 2542:
case 2113:
case 3:
case 2337:
case 2800:
case 1185:
case 2671:
case 1679:
case 2448:
case 925:
case 732:
case 1505:
case 827:
case 1153:
case 1945:
case 1069:
case 3044:
case 1409:
case 2401:
case 2902:
case 2636:
case 2865:
case 1689:
case 2250:
case 1560:
case 544:
case 3292:
case 2440:
case 1128:
case 233:
case 525:
case 1270:
case 74:
case 3199:
case 3745:
case 1622:
case 2155:
case 2943:
case 3126:
case 724:
case 1037:
case 1863:
case 3557:
case 1581:
case 2767:
case 2589:
case 1829:
case 2821:
case 4021:
case 3056:
case 1388:
case 1101:
case 2109:
case 2350:
case 897:
case 53:
case 3331:
case 59:
case 3931:
case 3414:
case 1594:
case 119:
case 2475:
case 907:
case 3788:
case 2428:
case 1140:
case 1318:
case 1455:
case 508:
case 3992:
case 3916:
case 223:
case 595:
case 1473:
case 306:
case 1970:
case 3484:
case 2010:
case 566:
case 2724:
case 1370:
case 507:
case 80:
case 1197:
case 2088:
case 623:
case 891:
case 3890:
case 1380:
case 276:
case 2358:
case 3474:
case 831:
case 1872:
case 1483:
case 2415:
case 1559:
case 1925:
case 901:
case 966:
case 2605:
case 1378:
case 995:
case 2852:
case 3146:
case 384:
case 1571:
case 908:
case 3976:
case 3376:
case 3780:
case 3687:
case 1910:
case 2070:
case 898:
case 1310:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744887601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,];
var gg_b = "1744887601/";

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
