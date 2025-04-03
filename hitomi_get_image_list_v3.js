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
case 2608:
case 2525:
case 3849:
case 2971:
case 3303:
case 3550:
case 1990:
case 2189:
case 4:
case 1585:
case 2665:
case 522:
case 1772:
case 692:
case 3656:
case 4017:
case 3530:
case 952:
case 2194:
case 1173:
case 3634:
case 757:
case 495:
case 4053:
case 0:
case 1620:
case 669:
case 110:
case 3627:
case 966:
case 1560:
case 3654:
case 1195:
case 2680:
case 4033:
case 1233:
case 741:
case 3903:
case 300:
case 2371:
case 270:
case 3545:
case 1473:
case 2795:
case 3221:
case 989:
case 2369:
case 1896:
case 632:
case 324:
case 1253:
case 1794:
case 3397:
case 414:
case 33:
case 75:
case 3263:
case 2489:
case 1217:
case 2172:
case 2895:
case 2496:
case 433:
case 3118:
case 2647:
case 2938:
case 1875:
case 1236:
case 368:
case 1192:
case 742:
case 2958:
case 1748:
case 923:
case 1893:
case 2874:
case 1256:
case 3076:
case 1474:
case 1775:
case 2370:
case 2493:
case 864:
case 3904:
case 3266:
case 1234:
case 3220:
case 3128:
case 555:
case 2522:
case 1227:
case 1848:
case 2774:
case 2719:
case 1793:
case 2475:
case 2876:
case 3074:
case 3019:
case 91:
case 3633:
case 691:
case 2338:
case 521:
case 1119:
case 2088:
case 3306:
case 94:
case 164:
case 2358:
case 4034:
case 2175:
case 2892:
case 2970:
case 1663:
case 1492:
case 4056:
case 2583:
case 1707:
case 1516:
case 3888:
case 3304:
case 951:
case 2000:
case 4036:
case 3092:
case 3542:
case 3508:
case 1197:
case 3684:
case 3298:
case 587:
case 684:
case 3565:
case 2556:
case 498:
case 4083:
case 287:
case 1318:
case 147:
case 1587:
case 390:
case 2139:
case 3686:
case 1222:
case 674:
case 1535:
case 3973:
case 2554:
case 851:
case 277:
case 3580:
case 2645:
case 2279:
case 2214:
case 117:
case 1802:
case 4022:
case 2459:
case 1644:
case 28:
case 2261:
case 3869:
case 438:
case 1739:
case 1540:
case 1918:
case 14:
case 1702:
case 2071:
case 2402:
case 30:
case 27:
case 2797:
case 2901:
case 2678:
case 3097:
case 3769:
case 3547:
case 1541:
case 558:
case 258:
case 3770:
case 785:
case 2477:
case 2070:
case 166:
case 3319:
case 3491:
case 4012:
case 3562:
case 2988:
case 2213:
case 1299:
case 519:
case 775:
case 3870:
case 2105:
case 1286:
case 363:
case 1104:
case 1928:
case 2168:
case 2260:
case 2226:
case 1643:
case 2704:
case 467:
case 3004:
case 1768:
case 249:
case 3392:
case 3615:
case 3974:
case 4086:
case 2468:
case 1404:
case 3581:
case 2706:
case 2804:
case 2517:
case 4084:
case 1328:
case 3191:
case 3246:
case 866:
case 3758:
case 2058:
case 2457:
case 2886:
case 2784:
case 2050:
case 2485:
case 3084:
case 3025:
case 3146:
case 2424:
case 1737:
case 982:
case 3867:
case 639:
case 2437:
case 4006:
case 1724:
case 1425:
case 936:
case 3327:
case 1860:
case 3354:
case 2947:
case 1484:
case 2277:
case 1757:
case 2308:
case 2884:
case 3086:
case 777:
case 3850:
case 1364:
case 2460:
case 3144:
case 3767:
case 4004:
case 1824:
case 2413:
case 3830:
case 1760:
case 2365:
case 3356:
case 1885:
case 1857:
case 550:
case 1966:
case 918:
case 2812:
case 1186:
case 3927:
case 996:
case 699:
case 1199:
case 2980:
case 2113:
case 2573:
case 1044:
case 2124:
case 656:
case 3845:
case 2908:
case 3446:
case 3012:
case 2185:
case 2712:
case 3936:
case 1690:
case 2965:
case 2669:
case 3778:
case 3697:
case 36:
case 3956:
case 2137:
case 1596:
case 3498:
case 283:
case 2670:
case 834:
case 2362:
case 2123:
case 1691:
case 1882:
case 82:
case 285:
case 758:
case 1183:
case 1548:
case 2822:
case 346:
case 1422:
case 813:
case 3933:
case 303:
case 338:
case 573:
case 1115:
case 3443:
case 145:
case 127:
case 2179:
case 2482:
case 305:
case 1043:
case 2519:
case 3022:
case 719:
case 143:
case 575:
case 115:
case 1714:
case 2259:
case 3143:
case 1415:
case 1363:
case 3851:
case 2883:
case 3604:
case 113:
case 3842:
case 1761:
case 3831:
case 845:
case 1823:
case 490:
case 4003:
case 2479:
case 2414:
case 2715:
case 2202:
case 1879:
case 398:
case 3198:
case 2592:
case 134:
case 806:
case 3742:
case 1297:
case 2658:
case 1723:
case 12:
case 426:
case 971:
case 2381:
case 722:
case 3036:
case 3912:
case 2736:
case 1456:
case 3386:
case 4092:
case 1946:
case 3056:
case 1011:
case 2854:
case 2756:
case 945:
case 1835:
case 2827:
case 3765:
case 2978:
case 3325:
case 3034:
case 1066:
case 1427:
case 2435:
case 2350:
case 1755:
case 2945:
case 1944:
case 257:
case 871:
case 2754:
case 1274:
case 2455:
case 2293:
case 2856:
case 2487:
case 3466:
case 609:
case 3865:
case 906:
case 3999:
case 3695:
case 1559:
case 2967:
case 1154:
case 2135:
case 1840:
case 1127:
case 360:
case 4074:
case 934:
case 3986:
case 3847:
case 1539:
case 3120:
case 1346:
case 1134:
case 2378:
case 2187:
case 2155:
case 3111:
case 1502:
case 3629:
case 2207:
case 181:
case 3925:
case 3984:
case 4076:
case 913:
case 2950:
case 1292:
case 2440:
case 915:
case 25:
case 3218:
case 3983:
case 3110:
case 542:
case 1732:
case 242:
case 3862:
case 1741:
case 333:
case 2951:
case 3676:
case 1752:
case 1117:
case 2931:
case 1577:
case 896:
case 497:
case 4073:
case 2409:
case 424:
case 1832:
case 1841:
case 3762:
case 43:
case 804:
case 859:
case 2062:
case 314:
case 3121:
case 1398:
case 400:
case 753:
case 1852:
case 4095:
case 1295:
case 2688:
case 882:
case 3383:
case 1021:
case 2351:
case 2817:
case 2733:
case 2504:
case 1628:
case 1433:
case 721:
case 1505:
case 3781:
case 104:
case 395:
case 872:
case 3538:
case 212:
case 437:
case 512:
case 2717:
case 2152:
case 2833:
case 2506:
case 3315:
case 3692:
case 1417:
case 1998:
case 3558:
case 2141:
case 2600:
case 2853:
case 2061:
case 838:
case 3310:
case 3823:
case 269:
case 423:
case 1015:
case 1851:
case 2014:
case 1317:
case 3415:
case 3816:
case 805:
case 3363:
case 3122:
case 709:
case 754:
case 3297:
case 1742:
case 1731:
case 960:
case 41:
case 2952:
case 622:
case 292:
case 2023:
case 1500:
case 32:
case 2271:
case 198:
case 1083:
case 1198:
case 1606:
case 2431:
case 2309:
case 2843:
case 4090:
case 3548:
case 3910:
case 2142:
case 1917:
case 680:
case 576:
case 105:
case 394:
case 1953:
case 2352:
case 451:
case 2898:
case 1022:
case 417:
case 232:
case 2332:
case 2341:
case 103:
case 1933:
case 3422:
case 670:
case 586:
case 345:
case 3921:
case 2082:
case 138:
case 2935:
case 3044:
case 2744:
case 3199:
case 867:
case 1745:
case 653:
case 2955:
case 9:
case 2659:
case 3966:
case 1934:
case 3920:
case 1778:
case 2150:
case 1697:
case 3412:
case 1956:
case 466:
case 2746:
case 2844:
case 1845:
case 1446:
case 2602:
case 452:
case 1936:
case 2478:
case 1012:
case 1327:
case 2335:
case 1730:
case 914:
case 3826:
case 3425:
case 3112:
case 3757:
case 3572:
case 1750:
case 2355:
case 3320:
case 86:
case 1867:
case 2037:
case 3813:
case 1334:
case 3366:
case 2430:
case 1830:
case 933:
case 3824:
case 2060:
case 3311:
case 3486:
case 1356:
case 935:
case 1603:
case 1549:
case 291:
case 1099:
case 2013:
case 3364:
case 2323:
case 677:
case 1922:
case 574:
case 2810:
case 3433:
case 3273:
case 195:
case 1383:
case 3021:
case 410:
case 3453:
case 96:
case 144:
case 3295:
case 2721:
case 2481:
case 2863:
case 2316:
case 193:
case 320:
case 3998:
case 808:
case 3417:
case 3010:
case 1558:
case 584:
case 1463:
case 1692:
case 2710:
case 1881:
case 1:
case 3229:
case 2607:
case 2314:
case 1410:
case 1017:
case 1676:
case 756:
case 372:
case 1322:
case 202:
case 67:
case 3577:
case 135:
case 3343:
case 1163:
case 348:
case 2648:
case 3117:
case 3809:
case 1218:
case 108:
case 1110:
case 1983:
case 762:
case 2032:
case 8:
case 2041:
case 2916:
case 3732:
case 1862:
case 3741:
case 2462:
case 1915:
case 2693:
case 844:
case 382:
case 1674:
case 3398:
case 1121:
case 3133:
case 68:
case 893:
case 2961:
case 2009:
case 3852:
case 3709:
case 2181:
case 336:
case 895:
case 440:
case 2979:
case 3346:
case 1166:
case 1120:
case 1847:
case 761:
case 1228:
case 2694:
case 3154:
case 201:
case 2913:
case 1312:
case 3559:
case 1695:
case 501:
case 916:
case 3127:
case 1986:
case 2689:
case 2957:
case 1164:
case 3292:
case 1569:
case 2200:
case 2108:
case 2696:
case 381:
case 1925:
case 1571:
case 658:
case 2447:
case 3276:
case 1880:
case 2408:
case 1056:
case 2326:
case 903:
case 3835:
case 1464:
case 2465:
case 1912:
case 2866:
case 2313:
case 1399:
case 1708:
case 1411:
case 3456:
case 3855:
case 3219:
case 1054:
case 1420:
case 3735:
case 3434:
case 1466:
case 1865:
case 3020:
case 2864:
case 464:
case 946:
case 2337:
case 2720:
case 649:
case 2480:
case 3755:
case 3454:
case 4066:
case 1653:
case 4020:
case 774:
case 1633:
case 3621:
case 1306:
case 3514:
case 3579:
case 3119:
case 3174:
case 3807:
case 90:
case 539:
case 3610:
case 868:
case 1092:
case 239:
case 1542:
case 2368:
case 3492:
case 3516:
case 2400:
case 1551:
case 990:
case 2652:
case 562:
case 2265:
case 1211:
case 262:
case 3893:
case 3476:
case 2632:
case 907:
case 168:
case 1906:
case 926:
case 2905:
case 629:
case 599:
case 2280:
case 1019:
case 1074:
case 2188:
case 3254:
case 3474:
case 3419:
case 2075:
case 2968:
case 3391:
case 1128:
case 3234:
case 1266:
case 1397:
case 197:
case 3896:
case 3794:
case 2149:
case 3495:
case 124:
case 2281:
case 3889:
case 13:
case 701:
case 675:
case 2302:
case 3233:
case 1095:
case 261:
case 3429:
case 2339:
case 3894:
case 1210:
case 685:
case 3789:
case 3217:
case 2101:
case 448:
case 3772:
case 3557:
case 1701:
case 2072:
case 496:
case 19:
case 3611:
case 1656:
case 1530:
case 965:
case 418:
case 1849:
case 2401:
case 2718:
case 1550:
case 1636:
case 2939:
case 800:
case 3872:
case 1801:
case 1654:
case 2655:
case 824:
case 2687:
case 1567:
case 3173:
case 404:
case 1244:
case 2993:
case 1919:
case 209:
case 1974:
case 1581:
case 657:
case 1858:
case 863:
case 2975:
case 2521:
case 2614:
case 2245:
case 865:
case 1838:
case 2438:
case 1246:
case 389:
case 2948:
case 1758:
case 1006:
case 1683:
case 93:
case 2616:
case 997:
case 1738:
case 924:
case 1374:
case 3552:
case 2393:
case 1992:
case 2077:
case 3106:
case 65:
case 2138:
case 3541:
case 3532:
case 3225:
case 3284:
case 2375:
case 1770:
case 3928:
case 3509:
case 786:
case 99:
case 2682:
case 3286:
case 4044:
case 1870:
case 2389:
case 1869:
case 3103:
case 890:
case 427:
case 2890:
case 494:
case 688:
case 317:
case 3759:
case 2059:
case 1871:
case 351:
case 2471:
case 3646:
case 731:
case 10:
case 1097:
case 2972:
case 1373:
case 2242:
case 2231:
case 3090:
case 3283:
case 3918:
case 3540:
case 2790:
case 1395:
case 1612:
case 1771:
case 1565:
case 2989:
case 1190:
case 2657:
case 2685:
case 1298:
case 2171:
case 434:
case 1929:
case 42:
case 2169:
case 126:
case 3197:
case 415:
case 3535:
case 3222:
case 1243:
case 2626:
case 107:
case 2994:
case 2660:
case 1973:
case 2372:
case 413:
case 1699:
case 3587:
case 3318:
case 347:
case 1686:
case 323:
case 530:
case 3071:
case 3216:
case 230:
case 483:
case 20:
case 672:
case 2097:
case 2769:
case 1394:
case 2547:
case 2490:
case 1242:
case 3678:
case 1231:
case 636:
case 475:
case 2329:
case 3439:
case 1890:
case 3214:
case 1059:
case 1389:
case 38:
case 2869:
case 682:
case 1396:
case 3897:
case 3261:
case 620:
case 962:
case 590:
case 3139:
case 767:
case 1566:
case 604:
case 2243:
case 3301:
case 2973:
case 1660:
case 1372:
case 2508:
case 526:
case 2625:
case 2684:
case 226:
case 1169:
case 3349:
case 3803:
case 3536:
case 2190:
case 2298:
case 1685:
case 618:
case 3517:
case 2683:
case 1458:
case 4030:
case 1563:
case 3388:
case 3177:
case 3651:
case 4050:
case 798:
case 2976:
case 1948:
case 1278:
case 2758:
case 2004:
case 3533:
case 3405:
case 1521:
case 1068:
case 1679:
case 2838:
case 2244:
case 154:
case 2615:
case 3553:
case 2919:
case 2581:
case 1661:
case 809:
case 1267:
case 563:
case 3105:
case 263:
case 671:
case 2870:
case 4045:
case 565:
case 2622:
case 450:
case 3168:
case 4078:
case 1791:
case 3477:
case 681:
case 358:
case 1158:
case 2770:
case 1250:
case 1077:
case 3489:
case 380:
case 3172:
case 1101:
case 2263:
case 3496:
case 606:
case 954:
case 909:
case 1096:
case 1546:
case 478:
case 1339:
case 1089:
case 442:
case 645:
case 1302:
case 2903:
case 200:
case 3494:
case 3829:
case 2397:
case 1544:
case 643:
case 1094:
case 297:
case 488:
case 760:
case 1149:
case 3773:
case 524:
case 694:
case 1281:
case 597:
case 627:
case 23:
case 1655:
case 1959:
case 3049:
case 2749:
case 1939:
case 2627:
case 3209:
case 1635:
case 2801:
case 861:
case 1449:
case 3680:
case 2654:
case 3232:
case 1902:
case 3241:
case 3525:
case 1401:
case 3472:
case 3189:
case 3665:
case 3252:
case 3001:
case 237:
case 62:
case 1072:
case 59:
case 2997:
case 2418:
case 2701:
case 537:
case 3240:
case 3148:
case 3583:
case 3970:
case 2304:
case 2551:
case 2700:
case 3792:
case 856:
case 2542:
case 4080:
case 321:
case 899:
case 3088:
case 3175:
case 2653:
case 2800:
case 1488:
case 793:
case 3681:
case 1728:
case 744:
case 3493:
case 3370:
case 1968:
case 2220:
case 353:
case 2128:
case 1905:
case 3522:
case 199:
case 2074:
case 1280:
case 2019:
case 1188:
case 1543:
case 1377:
case 3475:
case 1632:
case 4047:
case 45:
case 156:
case 1652:
case 1598:
case 3958:
case 708:
case 162:
case 3207:
case 1937:
case 1040:
case 1447:
case 2984:
case 3345:
case 2164:
case 1957:
case 1689:
case 3047:
case 1985:
case 2747:
case 652:
case 1200:
case 1696:
case 1924:
case 3967:
case 560:
case 73:
case 101:
case 2695:
case 260:
case 455:
case 2166:
case 2847:
case 2120:
case 2673:
case 1960:
case 700:
case 3155:
case 453:
case 1926:
case 3836:
case 3734:
case 1766:
case 2034:
case 1087:
case 3649:
case 3945:
case 3080:
case 311:
case 3856:
case 801:
case 2780:
case 1385:
case 2054:
case 2027:
case 2420:
case 1324:
case 3727:
case 2466:
case 2865:
case 1764:
case 1313:
case 1147:
case 1820:
case 3367:
case 2386:
case 737:
case 3854:
case 1408:
case 1711:
case 2056:
case 689:
case 3601:
case 3978:
case 1672:
case 1360:
case 2464:
case 802:
case 312:
case 1821:
case 2410:
case 422:
case 61:
case 3833:
case 2017:
case 3152:
case 2463:
case 2881:
case 2692:
case 3296:
case 184:
case 1361:
case 3141:
case 623:
case 2383:
case 1982:
case 593:
case 244:
case 3688:
case 3733:
case 3504:
case 647:
case 3109:
case 3817:
case 2922:
case 3081:
case 931:
case 4049:
case 2421:
case 3342:
case 3331:
case 3409:
case 617:
case 651:
case 1249:
case 3062:
case 214:
case 1675:
case 2915:
case 2619:
case 1693:
case 2121:
case 1961:
case 1009:
case 2570:
case 533:
case 208:
case 1032:
case 1591:
case 1041:
case 233:
case 3951:
case 884:
case 1916:
case 2676:
case 2322:
case 1923:
case 235:
case 3931:
case 1052:
case 3942:
case 1130:
case 2845:
case 974:
case 3671:
case 1238:
case 1602:
case 3124:
case 3185:
case 3712:
case 131:
case 70:
case 2012:
case 2697:
case 1150:
case 3078:
case 730:
case 3669:
case 2956:
case 458:
case 1746:
case 1340:
case 2444:
case 3045:
case 3126:
case 1955:
case 1987:
case 3595:
case 1639:
case 3205:
case 2927:
case 1935:
case 3347:
case 2954:
case 1167:
case 1846:
case 3980:
case 329:
case 1445:
case 1744:
case 2086:
case 3308:
case 3884:
case 191:
case 2144:
case 3799:
case 902:
case 3067:
case 3365:
case 1060:
case 567:
case 1178:
case 1355:
case 2750:
case 1270:
case 3886:
case 3457:
case 3784:
case 3050:
case 1940:
case 3485:
case 3424:
case 3725:
case 2291:
case 1037:
case 2025:
case 1430:
case 2334:
case 1335:
case 3030:
case 3437:
case 3380:
case 831:
case 1450:
case 1085:
case 2751:
case 628:
case 3202:
case 1941:
case 1932:
case 2083:
case 2290:
case 298:
case 2606:
case 3783:
case 1431:
case 487:
case 1442:
case 2742:
case 876:
case 1952:
case 1269:
case 3042:
case 216:
case 3031:
case 2353:
case 2500:
case 516:
case 1451:
case 1014:
case 2851:
case 1079:
case 2317:
case 3259:
case 2604:
case 1909:
case 1061:
case 1528:
case 3239:
case 1605:
case 610:
case 3479:
case 3414:
case 1332:
case 2933:
case 203:
case 1341:
case 373:
case 869:
case 2443:
case 1082:
case 238:
case 763:
case 1352:
case 3574:
case 3114:
case 375:
case 640:
case 3722:
case 1898:
case 2022:
case 3981:
case 505:
case 176:
case 47:
case 4069:
case 1309:
case 385:
case 3822:
case 4071:
case 2398:
case 3462:
case 3693:
case 282:
case 582:
case 2852:
case 2133:
case 461:
case 536:
case 3181:
case 2832:
case 2841:
case 3979:
case 3914:
case 1062:
case 3249:
case 812:
case 1441:
case 1432:
case 248:
case 572:
case 3648:
case 2809:
case 1272:
case 2577:
case 2343:
case 3201:
case 3052:
case 630:
case 1452:
case 178:
case 4089:
case 3041:
case 2998:
case 218:
case 1289:
case 2010:
case 518:
case 1141:
case 1296:
case 384:
case 1853:
case 842:
case 3821:
case 596:
case 2229:
case 112:
case 3607:
case 2063:
case 1152:
case 1717:
case 296:
case 1833:
case 3314:
case 3379:
case 3763:
case 1506:
case 888:
case 607:
case 504:
case 559:
case 1081:
case 259:
case 1342:
case 204:
case 1331:
case 3162:
case 2273:
case 2453:
case 2295:
case 3721:
case 520:
case 2568:
case 3982:
case 1817:
case 3481:
case 1733:
case 3316:
case 2944:
case 3385:
case 3357:
case 157:
case 1455:
case 1080:
case 2219:
case 1330:
case 2735:
case 2434:
case 1503:
case 985:
case 2454:
case 3087:
case 3055:
case 3480:
case 728:
case 1854:
case 1756:
case 1827:
case 3672:
case 2835:
case 1601:
case 3326:
case 3820:
case 3147:
case 1834:
case 1008:
case 2855:
case 439:
case 2292:
case 3689:
case 3985:
case 15:
case 3696:
case 1930:
case 2502:
case 4048:
case 1207:
case 2740:
case 581:
case 1950:
case 3447:
case 462:
case 3590:
case 2346:
case 4075:
case 3694:
case 3960:
case 3180:
case 3913:
case 811:
case 740:
case 2154:
case 1967:
case 2127:
case 1135:
case 571:
case 499:
case 4093:
case 227:
case 1114:
case 63:
case 543:
case 294:
case 1574:
case 697:
case 386:
case 545:
case 173:
case 1161:
case 3341:
case 2575:
case 600:
case 2782:
case 245:
case 185:
case 1576:
case 3309:
case 2183:
case 3677:
case 4002:
case 3798:
case 2963:
case 3142:
case 1123:
case 957:
case 911:
case 3269:
case 1042:
case 3952:
case 1031:
case 1592:
case 2861:
case 52:
case 69:
case 2483:
case 3451:
case 22:
case 392:
case 1815:
case 1051:
case 2879:
case 3941:
case 1638:
case 885:
case 1423:
case 1783:
case 789:
case 2321:
case 3061:
case 3605:
case 873:
case 2761:
case 369:
case 513:
case 2310:
case 1414:
case 2415:
case 95:
case 215:
case 2816:
case 3079:
case 3668:
case 1883:
case 1461:
case 2824:
case 3026:
case 1413:
case 723:
case 2760:
case 4068:
case 2857:
case 1884:
case 1308:
case 725:
case 454:
case 2364:
case 1067:
case 2837:
case 1426:
case 3013:
case 1030:
case 2425:
case 1437:
case 3085:
case 71:
case 2112:
case 988:
case 2757:
case 1277:
case 1485:
case 3518:
case 3387:
case 3270:
case 3037:
case 2366:
case 1899:
case 2737:
case 2412:
case 2184:
case 2589:
case 3150:
case 3746:
case 2911:
case 1137:
case 2125:
case 2046:
case 2596:
case 4077:
case 3602:
case 1908:
case 3130:
case 331:
case 2206:
case 1185:
case 1712:
case 1205:
case 751:
case 2186:
case 3639:
case 717:
case 1113:
case 3744:
case 3445:
case 129:
case 2199:
case 2044:
case 1126:
case 1045:
case 3987:
case 3659:
case 1268:
case 3340:
case 1160:
case 2966:
case 2104:
case 2509:
case 849:
case 3891:
case 3267:
case 660:
case 2286:
case 1105:
case 794:
case 1285:
case 2698:
case 2106:
case 1257:
case 2552:
case 3077:
case 3230:
case 3138:
case 706:
case 1237:
case 3907:
case 3158:
case 158:
case 3250:
case 1477:
case 2328:
case 289:
case 3623:
case 1631:
case 589:
case 1058:
case 2805:
case 4037:
case 970:
case 4024:
case 1706:
case 1177:
case 3458:
case 2868:
case 3616:
case 4057:
case 1038:
case 3993:
case 309:
case 1468:
case 579:
case 2705:
case 1300:
case 2404:
case 980:
case 1806:
case 1405:
case 3307:
case 4060:
case 3245:
case 3975:
case 3521:
case 3068:
case 3614:
case 2222:
case 1527:
case 2403:
case 2535:
case 3660:
case 3372:
case 1554:
case 1301:
case 88:
case 247:
case 693:
case 3613:
case 2555:
case 1703:
case 644:
case 1139:
case 223:
case 4016:
case 3657:
case 953:
case 1556:
case 187:
case 3511:
case 21:
case 955:
case 1803:
case 1650:
case 3564:
case 492:
case 1402:
case 1223:
case 476:
case 3471:
case 1901:
case 1797:
case 3972:
case 3790:
case 3469:
case 2497:
case 54:
case 608:
case 3002:
case 24:
case 1071:
case 2859:
case 2702:
case 2215:
case 2644:
case 2103:
case 1261:
case 1897:
case 2739:
case 3890:
case 614:
case 551:
case 1949:
case 877:
case 1645:
case 2802:
case 1214:
case 2759:
case 1522:
case 3609:
case 2848:
case 401:
case 1719:
case 1774:
case 399:
case 3377:
case 155:
case 3188:
case 3968:
case 1662:
case 1493:
case 2234:
case 782:
case 66:
case 1958:
case 3048:
case 1874:
case 1776:
case 2256:
case 1938:
case 3208:
case 748:
case 977:
case 3641:
case 2875:
case 2192:
case 356:
case 796:
case 3305:
case 2523:
case 339:
case 1792:
case 3828:
case 3368:
case 1240:
case 2176:
case 718:
case 264:
case 1175:
case 4055:
case 853:
case 759:
case 1338:
case 2119:
case 855:
case 2807:
case 121:
case 4035:
case 2621:
case 2514:
case 2579:
case 97:
case 870:
case 3939:
case 2872:
case 210:
case 510:
case 2195:
case 3449:
case 2526:
case 1194:
case 2513:
case 1599:
case 3687:
case 2666:
case 3818:
case 2557:
case 1665:
case 1252:
case 122:
case 616:
case 2524:
case 2611:
case 1608:
case 2537:
case 1525:
case 1232:
case 2018:
case 1472:
case 1584:
case 3401:
case 949:
case 2796:
case 2894:
case 646:
case 2429:
case 4032:
case 2789:
case 1647:
case 3089:
case 3101:
case 402:
case 180:
case 4052:
case 1369:
case 2794:
case 3149:
case 1773:
case 2495:
case 3094:
case 771:
case 638:
case 170:
case 2390:
case 2473:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743721202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,];
var gg_b = "1743721202/";

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
