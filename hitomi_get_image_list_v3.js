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
case 3825:
case 2303:
case 2976:
case 3533:
case 395:
case 681:
case 1637:
case 3756:
case 3118:
case 2100:
case 2446:
case 2425:
case 999:
case 1248:
case 1788:
case 3819:
case 665:
case 3260:
case 2838:
case 1123:
case 983:
case 3983:
case 2534:
case 3438:
case 3384:
case 3235:
case 1779:
case 654:
case 2014:
case 1028:
case 1676:
case 1684:
case 3940:
case 2870:
case 3470:
case 3516:
case 3763:
case 3090:
case 113:
case 4070:
case 1359:
case 2143:
case 2764:
case 3337:
case 2587:
case 922:
case 2507:
case 728:
case 3732:
case 3549:
case 774:
case 3013:
case 141:
case 3497:
case 2340:
case 177:
case 3640:
case 1984:
case 438:
case 430:
case 3060:
case 1675:
case 4081:
case 2637:
case 2591:
case 1731:
case 791:
case 2801:
case 1425:
case 1446:
case 3515:
case 1139:
case 4067:
case 970:
case 2248:
case 3172:
case 354:
case 1014:
case 1561:
case 2676:
case 2028:
case 2779:
case 2684:
case 996:
case 3845:
case 2968:
case 2604:
case 3959:
case 365:
case 2426:
case 548:
case 969:
case 700:
case 3277:
case 708:
case 2698:
case 540:
case 3755:
case 381:
case 1897:
case 695:
case 1143:
case 2359:
case 414:
case 1507:
case 2214:
case 67:
case 3290:
case 3882:
case 1340:
case 3368:
case 241:
case 3375:
case 74:
case 787:
case 422:
case 50:
case 1379:
case 1461:
case 3024:
case 893:
case 2610:
case 3363:
case 3608:
case 1000:
case 1816:
case 1080:
case 16:
case 2850:
case 2963:
case 889:
case 1151:
case 1955:
case 858:
case 1656:
case 4092:
case 2740:
case 2280:
case 2693:
case 2582:
case 2200:
case 593:
case 2239:
case 2892:
case 1487:
case 1632:
case 2243:
case 3581:
case 2815:
case 1910:
case 3501:
case 3356:
case 2331:
case 710:
case 1663:
case 4029:
case 3798:
case 1271:
case 2655:
case 1862:
case 1308:
case 3931:
case 1519:
case 3244:
case 1993:
case 2829:
case 123:
case 3704:
case 1394:
case 1720:
case 3776:
case 284:
case 1526:
case 3570:
case 1545:
case 1932:
case 914:
case 3018:
case 1610:
case 2080:
case 2039:
case 63:
case 402:
case 3887:
case 3449:
case 1850:
case 3597:
case 3631:
case 4049:
case 151:
case 496:
case 1023:
case 342:
case 1364:
case 1582:
case 3775:
case 1239:
case 1502:
case 1280:
case 367:
case 2487:
case 2849:
case 469:
case 1892:
case 470:
case 1491:
case 1783:
case 1071:
case 586:
case 1331:
case 3988:
case 3190:
case 1655:
case 2434:
case 19:
case 3538:
case 2388:
case 930:
case 2519:
case 2993:
case 1829:
case 3462:
case 732:
case 3177:
case 3113:
case 4062:
case 2394:
case 2720:
case 3834:
case 2098:
case 909:
case 3586:
case 2465:
case 1453:
case 3574:
case 3351:
case 2004:
case 1132:
case 994:
case 2628:
case 3348:
case 721:
case 3179:
case 3771:
case 3003:
case 140:
case 1276:
case 3220:
case 2573:
case 1412:
case 416:
case 1558:
case 3635:
case 3522:
case 1284:
case 3936:
case 2517:
case 2951:
case 373:
case 1204:
case 3108:
case 3188:
case 1811:
case 2772:
case 3660:
case 2313:
case 1075:
case 3194:
case 535:
case 3040:
case 1648:
case 1495:
case 3952:
case 2377:
case 1928:
case 2914:
case 3913:
case 356:
case 3977:
case 2489:
case 2430:
case 2193:
case 1718:
case 2724:
case 3830:
case 2390:
case 3889:
case 926:
case 2757:
case 4047:
case 11:
case 1651:
case 2275:
case 2268:
case 3743:
case 3690:
case 1098:
case 3164:
case 813:
case 1478:
case 1496:
case 1084:
case 2132:
case 1628:
case 2614:
case 3652:
case 2541:
case 325:
case 3613:
case 3812:
case 841:
case 2298:
case 929:
case 3569:
case 248:
case 955:
case 3454:
case 388:
case 2412:
case 380:
case 2276:
case 4027:
case 2204:
case 3427:
case 2163:
case 359:
case 2744:
case 4054:
case 3895:
case 2335:
case 2466:
case 790:
case 3505:
case 1037:
case 2811:
case 3059:
case 2075:
case 1521:
case 4011:
case 3866:
case 1377:
case 317:
case 2237:
case 1352:
case 1489:
case 3131:
case 2156:
case 2718:
case 1390:
case 1275:
case 1268:
case 3542:
case 3739:
case 3700:
case 3780:
case 3636:
case 3240:
case 2885:
case 3323:
case 1900:
case 3064:
case 3957:
case 1421:
case 3644:
case 2805:
case 584:
case 1735:
case 711:
case 3279:
case 803:
case 3924:
case 2255:
case 4085:
case 1671:
case 2032:
case 2566:
case 4005:
case 59:
case 3405:
case 3120:
case 426:
case 186:
case 3714:
case 743:
case 503:
case 2923:
case 739:
case 89:
case 2357:
case 875:
case 627:
case 2790:
case 1589:
case 293:
case 1596:
case 1874:
case 3159:
case 1806:
case 3618:
case 1886:
case 2441:
case 2175:
case 3841:
case 916:
case 12:
case 551:
case 1565:
case 945:
case 409:
case 2869:
case 2512:
case 1473:
case 307:
case 447:
case 1417:
case 349:
case 2056:
case 1623:
case 289:
case 1344:
case 3858:
case 851:
case 250:
case 1822:
case 3294:
case 633:
case 919:
case 1372:
case 1805:
case 2198:
case 2900:
case 3918:
case 315:
case 1777:
case 2104:
case 2671:
case 2176:
case 649:
case 3821:
case 1752:
case 3079:
case 3728:
case 3264:
case 464:
case 1842:
case 3339:
case 2899:
case 406:
case 1923:
case 1324:
case 2055:
case 346:
case 1063:
case 2232:
case 931:
case 3944:
case 1680:
case 1639:
case 1293:
case 2596:
case 2886:
case 2010:
case 1441:
case 2137:
case 429:
case 327:
case 2806:
case 3406:
case 56:
case 3486:
case 3094:
case 2256:
case 1553:
case 3231:
case 1512:
case 2473:
case 1210:
case 3422:
case 882:
case 1869:
case 4022:
case 3672:
case 2344:
case 3817:
case 158:
case 2822:
case 3873:
case 10:
case 150:
case 132:
case 956:
case 3464:
case 2575:
case 2568:
case 784:
case 511:
case 3832:
case 79:
case 1537:
case 1691:
case 3085:
case 2797:
case 3559:
case 775:
case 2864:
case 703:
case 2221:
case 3662:
case 543:
case 2112:
case 2770:
case 1455:
case 737:
case 2634:
case 3127:
case 2463:
case 1584:
case 2166:
case 2273:
case 3520:
case 1576:
case 2041:
case 973:
case 1598:
case 1888:
case 2195:
case 3616:
case 751:
case 1362:
case 3719:
case 905:
case 1781:
case 2058:
case 2687:
case 1073:
case 2315:
case 347:
case 671:
case 1189:
case 2831:
case 1017:
case 3856:
case 309:
case 1493:
case 362:
case 3431:
case 3725:
case 394:
case 4031:
case 3206:
case 1934:
case 433:
case 3746:
case 3069:
case 723:
case 3242:
case 232:
case 917:
case 1392:
case 694:
case 1153:
case 2349:
case 1797:
case 1864:
case 3916:
case 609:
case 2691:
case 3479:
case 3855:
case 1221:
case 4079:
case 2316:
case 3205:
case 1112:
case 446:
case 2455:
case 1463:
case 2:
case 1166:
case 3488:
case 782:
case 427:
case 1329:
case 1217:
case 3933:
case 2767:
case 3334:
case 4008:
case 4088:
case 1661:
case 1273:
case 2598:
case 3086:
case 1738:
case 355:
case 988:
case 2362:
case 4094:
case 2888:
case 1195:
case 980:
case 3074:
case 3650:
case 626:
case 1058:
case 2073:
case 2781:
case 536:
case 3022:
case 2109:
case 2493:
case 2130:
case 2189:
case 1456:
case 2934:
case 3692:
case 187:
case 3876:
case 2498:
case 560:
case 1367:
case 274:
case 228:
case 2065:
case 3884:
case 345:
case 3319:
case 2404:
case 3588:
case 2338:
case 2476:
case 4003:
case 1278:
case 4083:
case 2715:
case 100:
case 3938:
case 1012:
case 3325:
case 2682:
case 316:
case 1646:
case 1749:
case 1066:
case 3970:
case 1926:
case 735:
case 3186:
case 1475:
case 2397:
case 3440:
case 1859:
case 2750:
case 3601:
case 4040:
case 879:
case 3997:
case 191:
case 1158:
case 1716:
case 456:
case 1563:
case 2089:
case 2555:
case 2117:
case 2009:
case 3579:
case 2295:
case 2370:
case 1902:
case 120:
case 1645:
case 1729:
case 501:
case 1065:
case 2053:
case 1484:
case 1404:
case 4020:
case 1338:
case 1476:
case 3105:
case 1510:
case 2278:
case 1253:
case 2556:
case 3697:
case 3531:
case 25:
case 576:
case 713:
case 2301:
case 3142:
case 208:
case 1883:
case 3054:
case 2012:
case 3967:
case 357:
case 1803:
case 2733:
case 1602:
case 1682:
case 488:
case 2532:
case 2749:
case 4059:
case 2289:
case 2209:
case 1792:
case 2646:
case 2141:
case 1437:
case 272:
case 616:
case 2926:
case 3459:
case 3382:
case 3011:
case 2859:
case 331:
case 2475:
case 1397:
case 3787:
case 853:
case 2095:
case 3247:
case 898:
case 2716:
case 1173:
case 890:
case 1009:
case 1030:
case 319:
case 2563:
case 1266:
case 1555:
case 1089:
case 3761:
case 645:
case 3169:
case 2902:
case 553:
case 3905:
case 3101:
case 3674:
case 789:
case 2342:
case 2857:
case 322:
case 1399:
case 3181:
case 750:
case 70:
case 3606:
case 2528:
case 2747:
case 1514:
case 4057:
case 1061:
case 2287:
case 952:
case 1400:
case 1146:
case 1439:
case 834:
case 1125:
case 3092:
case 3167:
case 3216:
case 3472:
case 3942:
case 1711:
case 2617:
case 1007:
case 624:
case 678:
case 3622:
case 2673:
case 3050:
case 2261:
case 669:
case 383:
case 1322:
case 2471:
case 3358:
case 1754:
case 2126:
case 2941:
case 2145:
case 510:
case 1548:
case 1727:
case 3262:
case 3560:
case 602:
case 43:
case 304:
case 366:
case 2102:
case 1034:
case 3029:
case 1551:
case 1374:
case 3233:
case 818:
case 2958:
case 2399:
case 3839:
case 1342:
case 3880:
case 699:
case 3016:
case 3590:
case 1824:
case 604:
case 3552:
case 1207:
case 236:
case 3418:
case 1747:
case 2480:
case 2146:
case 396:
case 3669:
case 3766:
case 3049:
case 3513:
case 1423:
case 3999:
case 1872:
case 5:
case 1673:
case 3795:
case 965:
case 3229:
case 3974:
case 2844:
case 3373:
case 370:
case 1471:
case 832:
case 1941:
case 1145:
case 1369:
case 3712:
case 2754:
case 954:
case 3444:
case 1621:
case 3033:
case 2034:
case 1182:
case 2291:
case 532:
case 2551:
case 2374:
case 763:
case 3843:
case 1958:
case 2306:
case 111:
case 3197:
case 3544:
case 2448:
case 153:
case 1953:
case 3848:
case 47:
case 2978:
case 1219:
case 1327:
case 997:
case 2046:
case 2025:
case 2666:
case 3378:
case 3436:
case 3149:
case 3281:
case 4036:
case 1706:
case 198:
case 1689:
case 1225:
case 2543:
case 1246:
case 1630:
case 1609:
case 190:
case 93:
case 1774:
case 3396:
case 2187:
case 885:
case 1191:
case 2414:
case 2890:
case 1799:
case 2580:
case 2539:
case 1696:
case 2500:
case 2653:
case 874:
case 1678:
case 561:
case 820:
case 221:
case 176:
case 3490:
case 2852:
case 2813:
case 2134:
case 3627:
case 1835:
case 528:
case 574:
case 638:
case 2930:
case 861:
case 3162:
case 2245:
case 3413:
case 2705:
case 1523:
case 330:
case 3081:
case 4060:
case 3773:
case 1695:
case 338:
case 253:
case 179:
case 3460:
case 2860:
case 2571:
case 1769:
case 3312:
case 3238:
case 1451:
case 3192:
case 3927:
case 3954:
case 3647:
case 2786:
case 298:
case 2689:
case 2706:
case 2774:
case 3150:
case 572:
case 454:
case 1414:
case 1890:
case 3524:
case 2995:
case 942:
case 1539:
case 1742:
case 3911:
case 1282:
case 2696:
case 3557:
case 2045:
case 3297:
case 1653:
case 2026:
case 2678:
case 465:
case 740:
case 1347:
case 276:
case 3828:
case 2002:
case 314:
case 3366:
case 1877:
case 481:
case 1612:
case 160:
case 3395:
case 3270:
case 1226:
case 2523:
case 808:
case 85:
case 1245:
case 3572:
case 1785:
case 2235:
case 2620:
case 3014:
case 3561:
case 573:
case 2940:
case 2470:
case 165:
case 1959:
case 1213:
case 805:
case 3764:
case 181:
case 3587:
case 2077:
case 1592:
case 1603:
case 1290:
case 2732:
case 460:
case 2497:
case 1368:
case 745:
case 252:
case 3340:
case 505:
case 468:
case 2825:
case 377:
case 1401:
case 1920:
case 1481:
case 479:
case 1060:
case 3904:
case 1236:
case 1640:
case 4025:
case 2756:
case 2118:
case 3139:
case 3446:
case 1515:
case 1157:
case 27:
case 335:
case 2260:
case 1467:
case 2398:
case 1172:
case 943:
case 154:
case 2438:
case 2376:
case 4019:
case 3419:
case 2304:
case 1529:
case 3676:
case 1620:
case 757:
case 1235:
case 3684:
case 1940:
case 3968:
case 3171:
case 3975:
case 2845:
case 2213:
case 635:
case 1516:
case 1470:
case 265:
case 1144:
case 4026:
case 1090:
case 3698:
case 1763:
case 3402:
case 281:
case 888:
case 3359:
case 2252:
case 859:
case 2550:
case 2603:
case 1077:
case 2592:
case 152:
case 1497:
case 1013:
case 341:
case 2802:
case 2368:
case 2375:
case 1825:
case 2060:
case 3251:
case 2793:
case 1756:
case 2124:
case 1659:
case 195:
case 2157:
case 719:
case 17:
case 1036:
case 2172:
case 1398:
case 3123:
case 1438:
case 3794:
case 254:
case 817:
case 1384:
case 2529:
case 498:
case 490:
case 1304:
case 682:
case 1152:
case 1393:
case 439:
case 3703:
case 3071:
case 3783:
case 2501:
case 443:
case 66:
case 1044:
case 726:
case 2429:
case 2931:
case 1177:
case 2784:
case 2704:
case 411:
case 1834:
case 2679:
case 3545:
case 1272:
case 1416:
case 762:
case 1570:
case 3526:
case 3932:
case 2694:
case 1861:
case 1018:
case 2363:
case 747:
case 1355:
case 2024:
case 549:
case 2964:
case 2608:
case 2688:
case 960:
case 3850:
case 833:
case 1807:
case 3364:
case 3023:
case 142:
case 1597:
case 1631:
case 1257:
case 3740:
case 1775:
case 3239:
case 3582:
case 3200:
case 3693:
case 2218:
case 2332:
case 849:
case 3892:
case 1224:
case 2450:
case 167:
case 3833:
case 2393:
case 792:
case 1415:
case 706:
case 764:
case 546:
case 2994:
case 3525:
case 3910:
case 1501:
case 13:
case 815:
case 2044:
case 1891:
case 2988:
case 990:
case 2433:
case 2908:
case 1356:
case 1798:
case 2310:
case 3043:
case 2538:
case 3388:
case 771:
case 4034:
case 2462:
case 1704:
case 2177:
case 1679:
case 515:
case 1567:
case 1776:
case 3720:
case 2113:
case 2416:
case 2272:
case 3148:
case 684:
case 901:
case 3080:
case 1688:
case 827:
case 675:
case 2887:
case 36:
case 1072:
case 3759:
case 2597:
case 2631:
case 603:
case 2775:
case 382:
case 976:
case 3849:
case 1450:
case 2979:
case 267:
case 527:
case 3407:
case 2108:
case 918:
case 2188:
case 3772:
case 87:
case 3110:
case 3313:
case 2040:
case 1411:
case 640:
case 3377:
case 2952:
case 1866:
case 2913:
case 4009:
case 117:
case 595:
case 3847:
case 3193:
case 3409:
case 3724:
case 3390:
case 2889:
case 1636:
case 1240:
case 3757:
case 1780:
case 1700:
case 3275:
case 1542:
case 1739:
case 3098:
case 1283:
case 1743:
case 428:
case 205:
case 2896:
case 3465:
case 61:
case 420:
case 1960:
case 3948:
case 2878:
case 3496:
case 485:
case 1652:
case 3076:
case 1020:
case 2179:
case 125:
case 2348:
case 1677:
case 461:
case 1812:
case 2771:
case 2003:
case 180:
case 2635:
case 2522:
case 188:
case 3155:
case 273:
case 3466:
case 472:
case 2585:
case 3811:
case 3648:
case 2411:
case 4095:
case 1660:
case 3075:
case 1952:
case 1259:
case 217:
case 1913:
case 854:
case 2328:
case 491:
case 1314:
case 932:
case 156:
case 1889:
case 1447:
case 3156:
case 2700:
case 2739:
case 2542:
case 31:
case 4053:
case 2283:
case 1351:
case 1574:
case 105:
case 3453:
case 581:
case 3132:
case 714:
case 3541:
case 1179:
case 3360:
case 45:
case 3298:
case 2812:
case 348:
case 3412:
case 3163:
case 4012:
case 173:
case 3204:
case 3284:
case 3600:
case 2751:
case 393:
case 3639:
case 3736:
case 3680:
case 1088:
case 127:
case 1343:
case 961:
case 3441:
case 1624:
case 2618:
case 2841:
case 1094:
case 3971:
case 3168:
case 1486:
case 1406:
case 686:
case 2371:
case 3210:
case 3512:
case 3458:
case 2527:
case 2748:
case 2288:
case 2208:
case 249:
case 389:
case 233:
case 3056:
case 44:
case 722:
case 1672:
case 358:
case 985:
case 2511:
case 2323:
case 3885:
case 3805:
case 83:
case 2957:
case 597:
case 2279:
case 2924:
case 3595:
case 1918:
case 3566:
case 3032:
case 544:
case 3777:
case 2405:
case 1821:
case 2485:
case 2120:
case 1728:
case 1079:
case 53:
case 3752:
case 2442:
case 1339:
case 1300:
case 844:
case 3842:
case 2972:
case 783:
case 3643:
case 146:
case 3063:
case 95:
case 769:
case 2657:
case 2008:
case 1751:
case 1618:
case 3010:
case 567:
case 2406:
case 2094:
case 3565:
case 2231:
case 3473:
case 1371:
case 149:
case 1208:
case 3093:
case 3760:
case 1527:
case 1748:
case 3344:
case 2672:
case 133:
case 2817:
case 842:
case 2873:
case 3943:
case 1957:
case 1064:
case 363:
case 1924:
case 60:
case 432:
case 215:
case 1279:
case 3184:
case 3671:
case 3176:
case 1405:
case 972:
case 386:
case 1714:
case 2728:
case 2547:
case 1442:
case 1972:
case 2339:
case 3899:
case 778:
case 3509:
case 3530:
case 1408:
case 129:
case 3166:
case 1488:
case 2520:
case 334:
case 3661:
case 3041:
case 2222:
case 1269:
case 1086:
case 1810:
case 2111:
case 1074:
case 2719:
case 3607:
case 28:
case 1650:
case 3687:
case 3058:
case 2391:
case 3831:
case 209:
case 1893:
case 262:
case 2929:
case 2274:
case 40:
case 632:
case 1503:
case 34:
case 294:
case 2725:
case 489:
case 1692:
case 1583:
case 1702:
case 2633:
case 1242:
case 797:
case 2832:
case 226:
case 744:
case 1387:
case 3350:
case 504:
case 1615:
case 2005:
case 171:
case 4032:
case 3797:
case 2863:
case 899:
case 1855:
case 1479:
case 1099:
case 310:
case 1629:
case 4063:
case 192:
case 6:
case 1205:
case 3770:
case 1726:
case 1361:
case 1949:
case 2127:
case 940:
case 2488:
case 569:
case 2408:
case 4010:
case 948:
case 3584:
case 767:
case 3258:
case 1915:
case 1111:
case 2494:
case 596:
case 2269:
case 3808:
case 502:
case 1719:
case 610:
case 42:
case 3241:
case 2022:
case 3130:
case 3493:
case 2962:
case 1856:
case 3109:
case 1391:
case 1431:
case 2147:
case 162:
case 1929:
case 896:
case 802:
case 3934:
case 2503:
case 1725:
case 194:
case 1649:
case 2242:
case 1299:
case 1464:
case 1832:
case 687:
case 463:
case 3178:
case 3961:
case 3165:
case 2387:
case 3196:
case 126:
case 1085:
case 1559:
case 1005:
case 3691:
case 3987:
case 1950:
case 2855:
case 486:
case 2099:
case 1154:
case 2205:
case 2285:
case 4055:
case 3455:
case 1992:
case 634:
case 2949:
case 3840:
case 1382:
case 1875:
case 1302:
case 2837:
case 2186:
case 2440:
case 1564:
case 2601:
case 2174:
case 600:
case 1787:
case 3750:
case 1707:
case 2122:
case 2997:
case 3173:
case 3555:
case 3266:
case 1638:
case 77:
case 3009:
case 3117:
case 1761:
case 1326:
case 320:
case 328:
case 3121:
case 2594:
case 374:
case 245:
case 3078:
case 1670:
case 3626:
case 3645:
case 2804:
case 2588:
case 2227:
case 4076:
case 90:
case 958:
case 385:
case 691:
case 2508:
case 1901:
case 3510:
case 2254:
case 2898:
case 1420:
case 1981:
case 3919:
case 1697:
case 1531:
case 3253:
case 993:
case 3715:
case 2938:
case 2199:
case 2403:
case 3803:
case 1054:
case 3682:
case 216:
case 3602:
case 1027:
case 3289:
case 754:
case 3749:
case 3066:
case 3646:
case 3230:
case 3945:
case 2302:
case 2868:
case 2459:
case 1970:
case 3926:
case 986:
case 1106:
case 1440:
case 2011:
case 661:
case 231:
case 1186:
case 830:
case 2707:
case 1681:
case 1174:
case 2247:
case 3095:
case 3158:
case 3716:
case 3619:
case 1122:
case 219:
case 2638:
case 963:
case 41:
case 538:
case 1667:
case 628:
case 3902:
case 2326:
case 1211:
case 3982:
case 3367:
case 3820:
case 1876:
case 1884:
case 1508:
case 2185:
case 1898:
case 1254:
case 2105:
case 2901:
case 3556:
case 448:
case 2697:
case 2531:
case 440:
case 35:
case 300:
case 308:
case 814:
case 2054:
case 1325:
case 2967:
case 92:
case 3733:
case 3296:
case 3091:
case 437:
case 1974:
case 1605:
case 4071:
case 826:
case 283:
case 1317:
case 170:
case 3471:
case 3234:
case 124:
case 1906:
case 3126:
case 3369:
case 403:
case 1712:
case 3941:
case 343:
case 1444:
case 2560:
case 3182:
case 475:
case 3102:
case 526:
case 977:
case 2029:
case 2778:
case 1753:
case 49:
case 1642:
case 2699:
case 299:
case 1197:
case 3958:
case 1843:
case 1016:
case 2905:
case 733:
case 2674:
case 2181:
case 1839:
case 562:
case 2730:
case 3824:
case 594:
case 1590:
case 1250:
case 3528:
case 1418:
case 1552:
case 2424:
case 3207:
case 509:
case 451:
case 1049:
case 196:
case 4023:
case 2167:
case 102:
case 2472:
case 1513:
case 2216:
case 847:
case 3872:
case 88:
case 1999:
case 2823:
case 1138:
case 3385:
case 2535:
case 2622:
case 809:
case 2050:
case 1795:
case 3261:
case 3844:
case 2605:
case 2373:
case 278:
case 871:
case 506:
case 1871:
case 2444:
case 2033:
case 3727:
case 1341:
case 166:
case 104:
case 3443:
case 2215:
case 4043:
case 1778:
case 1765:
case 3291:
case 2753:
case 1029:
case 571:
case 2062:
case 199:
case 3374:
case 3551:
case 2642:
case 2843:
case 3973:
case 3399:
case 1181:
case 2800:
case 2880:
case 1101:
case 1789:
case 3818:
case 1709:
case 855:
case 4039:
case 336:
case 4000:
case 2250:
case 4080:
case 941:
case 3480:
case 3921:
case 3125:
case 3146:
case 296:
case 46:
case 643:
case 202:
case 2999:
case 269:
case 3711:
case 639:
case 2795:
case 1622:
case 482:
case 2518:
case 3890:
case 2330:
case 2309:
case 3202:
case 516:
case 4014:
case 3282:
case 3500:
case 1297:
case 321:
case 2133:
case 2490:
case 1721:
case 114:
case 3134:
case 3612:
case 2947:
case 2162:
case 360:
case 2097:
case 3785:
case 2413:
case 3245:
case 705:
case 3226:
case 3705:
case 2116:
case 975:
case 1460:
case 1717:
case 379:
case 2611:
case 3996:
case 3448:
case 3978:
case 3965:
case 2848:
case 3769:
case 1312:
case 1238:
case 1353:
case 2365:
case 2281:
case 4051:
case 2741:
case 212:
case 1647:
case 2201:
case 2851:
case 3019:
case 1150:
case 2396:
case 3428:
case 1330:
case 788:
case 1309:
case 780:
case 3191:
case 2524:
case 1518:
case 2115:
case 96:
case 4028:
case 759:
case 2557:
case 3045:
case 725:
case 3678:
case 1070:
case 982:
case 3966:
case 1490:
case 1133:
case 1814:
case 1627:
case 214:
case 2721:
case 1947:
case 2366:
case 2129:
case 441:
case 1477:
case 3523:
case 2270:
case 1413:
case 2572:
case 3722:
case 668:
case 230:
case 831:
case 1758:
case 2001:
case 660:
case 1611:
case 2717:
case 2460:
case 1544:
case 717:
case 3219:
case 3571:
case 2238:
case 2192:
case 531:
case 1149:
case 621:
case 1378:
case 1365:
case 1436:
case 2647:
case 2954:
case 3912:
case 112:
case 1741:
case 3609:
case 3246:
case 3706:
case 3689:
case 398:
case 2150:
case 3774:
case 1396:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756530002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,];
var gg_b = "1756530002/";

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
