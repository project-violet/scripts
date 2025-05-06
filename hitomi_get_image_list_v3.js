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
case 3171:
case 65:
case 1312:
case 235:
case 1402:
case 1465:
case 1092:
case 2172:
case 72:
case 20:
case 2451:
case 2931:
case 1186:
case 2479:
case 2416:
case 1157:
case 866:
case 2956:
case 2436:
case 3410:
case 941:
case 1022:
case 2389:
case 1548:
case 450:
case 3524:
case 1350:
case 2444:
case 930:
case 1191:
case 2427:
case 1623:
case 31:
case 1460:
case 3158:
case 2873:
case 1223:
case 855:
case 2071:
case 1905:
case 1962:
case 1355:
case 3305:
case 246:
case 3362:
case 510:
case 1284:
case 768:
case 2361:
case 1684:
case 1121:
case 2497:
case 2189:
case 1476:
case 3468:
case 3088:
case 338:
case 2495:
case 894:
case 2553:
case 2005:
case 1357:
case 472:
case 3863:
case 1907:
case 3957:
case 3307:
case 3763:
case 3061:
case 1854:
case 3481:
case 479:
case 1386:
case 3986:
case 1439:
case 3359:
case 1741:
case 1959:
case 1043:
case 1309:
case 2980:
case 4049:
case 1419:
case 1132:
case 3496:
case 2161:
case 3006:
case 2000:
case 3162:
case 2188:
case 1155:
case 3469:
case 595:
case 3089:
case 1958:
case 2263:
case 2992:
case 2985:
case 305:
case 100:
case 149:
case 3908:
case 2204:
case 954:
case 2420:
case 2534:
case 3540:
case 434:
case 1813:
case 1391:
case 1733:
case 2604:
case 1467:
case 1011:
case 1087:
case 1833:
case 2607:
case 1313:
case 1464:
case 228:
case 3582:
case 3595:
case 3933:
case 1093:
case 2568:
case 1403:
case 708:
case 474:
case 2207:
case 1808:
case 4066:
case 484:
case 268:
case 636:
case 1708:
case 257:
case 3272:
case 570:
case 84:
case 1680:
case 1721:
case 2259:
case 1023:
case 899:
case 1821:
case 4029:
case 1809:
case 3871:
case 2596:
case 3859:
case 1709:
case 1622:
case 1575:
case 1341:
case 3759:
case 959:
case 403:
case 3590:
case 1786:
case 6:
case 2569:
case 2772:
case 401:
case 1963:
case 1292:
case 3807:
case 4077:
case 3363:
case 3414:
case 3707:
case 1904:
case 3434:
case 952:
case 26:
case 4028:
case 432:
case 1685:
case 378:
case 693:
case 837:
case 645:
case 22:
case 70:
case 2526:
case 2861:
case 1611:
case 2494:
case 2761:
case 120:
case 1598:
case 2552:
case 2063:
case 1631:
case 153:
case 1287:
case 1211:
case 3805:
case 2888:
case 3705:
case 160:
case 1755:
case 1231:
case 3516:
case 2373:
case 3536:
case 1256:
case 3206:
case 616:
case 559:
case 1042:
case 1528:
case 1577:
case 2530:
case 3544:
case 1133:
case 2424:
case 2889:
case 3527:
case 1566:
case 3700:
case 2447:
case 1850:
case 1643:
case 2789:
case 3163:
case 2706:
case 412:
case 1154:
case 2262:
case 2993:
case 1529:
case 356:
case 2515:
case 2984:
case 1812:
case 2605:
case 2662:
case 3261:
case 275:
case 1712:
case 285:
case 2786:
case 1872:
case 4052:
case 244:
case 525:
case 3342:
case 1569:
case 1772:
case 2222:
case 3621:
case 1596:
case 978:
case 2809:
case 3880:
case 2341:
case 565:
case 2622:
case 3221:
case 2575:
case 3291:
case 2692:
case 1526:
case 3208:
case 4030:
case 2963:
case 416:
case 1258:
case 2757:
case 4010:
case 16:
case 1440:
case 2354:
case 3892:
case 3885:
case 864:
case 3785:
case 2464:
case 2313:
case 2084:
case 2891:
case 1607:
case 1568:
case 128:
case 2333:
case 2023:
case 4015:
case 1259:
case 3209:
case 1271:
case 2721:
case 97:
case 3686:
case 2280:
case 3519:
case 98:
case 1659:
case 157:
case 3722:
case 3286:
case 2680:
case 1706:
case 3560:
case 436:
case 4068:
case 3756:
case 57:
case 831:
case 1806:
case 697:
case 3323:
case 2243:
case 3856:
case 1923:
case 809:
case 4081:
case 2750:
case 1789:
case 2643:
case 3655:
case 175:
case 2732:
case 1662:
case 2812:
case 370:
case 2832:
case 407:
case 380:
case 2141:
case 3449:
case 3255:
case 3033:
case 802:
case 3887:
case 1262:
case 3811:
case 3013:
case 3384:
case 3831:
case 3787:
case 4:
case 2855:
case 2211:
case 79:
case 2755:
case 603:
case 260:
case 2611:
case 3212:
case 3054:
case 3232:
case 749:
case 253:
case 700:
case 3502:
case 1761:
case 1200:
case 1424:
case 3250:
case 578:
case 3973:
case 3743:
case 588:
case 2256:
case 3843:
case 682:
case 2460:
case 3192:
case 3499:
case 3343:
case 1071:
case 3009:
case 1943:
case 2223:
case 1773:
case 1427:
case 3466:
case 2693:
case 91:
case 2121:
case 679:
case 3429:
case 2293:
case 2549:
case 1388:
case 689:
case 3122:
case 2284:
case 3387:
case 1172:
case 3893:
case 2186:
case 3091:
case 1931:
case 1479:
case 1451:
case 3884:
case 2312:
case 2109:
case 2465:
case 330:
case 2085:
case 3180:
case 395:
case 3498:
case 343:
case 744:
case 2022:
case 3428:
case 3477:
case 2900:
case 881:
case 2157:
case 3021:
case 873:
case 3723:
case 1436:
case 53:
case 1956:
case 3823:
case 476:
case 2155:
case 3050:
case 1490:
case 905:
case 1922:
case 354:
case 93:
case 3475:
case 2642:
case 3241:
case 2391:
case 623:
case 760:
case 2031:
case 2833:
case 621:
case 2713:
case 29:
case 1604:
case 249:
case 753:
case 2308:
case 1985:
case 720:
case 1263:
case 3254:
case 1534:
case 3012:
case 751:
case 1204:
case 1420:
case 614:
case 2754:
case 2907:
case 3613:
case 3633:
case 862:
case 2854:
case 1106:
case 3156:
case 51:
case 3213:
case 2476:
case 3233:
case 3055:
case 2150:
case 3503:
case 298:
case 829:
case 2309:
case 1425:
case 2959:
case 2741:
case 938:
case 1980:
case 2419:
case 2841:
case 3380:
case 869:
case 1372:
case 3111:
case 3842:
case 3652:
case 2735:
case 605:
case 1729:
case 376:
case 1602:
case 2835:
case 4021:
case 3046:
case 386:
case 2715:
case 255:
case 3383:
case 1532:
case 3014:
case 2679:
case 1983:
case 3897:
case 2040:
case 63:
case 3145:
case 430:
case 2153:
case 495:
case 923:
case 1924:
case 3727:
case 2636:
case 3230:
case 443:
case 4008:
case 2244:
case 950:
case 441:
case 3778:
case 1866:
case 3210:
case 808:
case 2589:
case 846:
case 921:
case 4091:
case 2506:
case 963:
case 2236:
case 2644:
case 3610:
case 1799:
case 2678:
case 2045:
case 3140:
case 890:
case 2134:
case 1423:
case 835:
case 3836:
case 2114:
case 737:
case 2278:
case 3844:
case 2810:
case 1828:
case 3347:
case 1660:
case 1947:
case 3744:
case 589:
case 3974:
case 1777:
case 2227:
case 183:
case 2852:
case 3615:
case 171:
case 2297:
case 582:
case 173:
case 1798:
case 181:
case 4086:
case 266:
case 2561:
case 1484:
case 3851:
case 4009:
case 2697:
case 3879:
case 706:
case 2588:
case 1493:
case 748:
case 3949:
case 1701:
case 3562:
case 3779:
case 3820:
case 982:
case 2695:
case 1557:
case 1676:
case 972:
case 3507:
case 3268:
case 2826:
case 410:
case 2353:
case 3637:
case 2726:
case 1875:
case 514:
case 4055:
case 2896:
case 1239:
case 61:
case 367:
case 3194:
case 1586:
case 979:
case 3890:
case 1639:
case 327:
case 2625:
case 2572:
case 989:
case 4012:
case 1442:
case 122:
case 3269:
case 2290:
case 3696:
case 287:
case 3669:
case 162:
case 618:
case 2690:
case 3296:
case 3825:
case 3226:
case 717:
case 1267:
case 2346:
case 3795:
case 1591:
case 1174:
case 3782:
case 1638:
case 2737:
case 934:
case 2094:
case 2404:
case 2334:
case 2817:
case 3340:
case 815:
case 2083:
case 2837:
case 2314:
case 1508:
case 1870:
case 3558:
case 1238:
case 2381:
case 3840:
case 3653:
case 2317:
case 2834:
case 1603:
case 3136:
case 766:
case 984:
case 3970:
case 2734:
case 3740:
case 1664:
case 997:
case 1370:
case 2814:
case 2337:
case 2846:
case 1533:
case 3382:
case 248:
case 3144:
case 2130:
case 726:
case 3035:
case 2110:
case 3015:
case 519:
case 113:
case 1480:
case 512:
case 2939:
case 1925:
case 2245:
case 2459:
case 82:
case 2027:
case 3151:
case 3179:
case 237:
case 2078:
case 1422:
case 828:
case 2115:
case 3010:
case 2135:
case 3030:
case 939:
case 903:
case 1129:
case 868:
case 1541:
case 164:
case 2016:
case 2036:
case 2853:
case 3634:
case 3246:
case 2967:
case 2753:
case 1166:
case 857:
case 3614:
case 3127:
case 2240:
case 1920:
case 3504:
case 1485:
case 1002:
case 299:
case 3214:
case 3379:
case 1951:
case 3351:
case 1431:
case 2683:
case 1749:
case 4041:
case 1487:
case 217:
case 1849:
case 1038:
case 532:
case 678:
case 345:
case 133:
case 131:
case 688:
case 2020:
case 3125:
case 391:
case 1377:
case 2330:
case 3977:
case 2224:
case 2090:
case 3747:
case 3069:
case 102:
case 3489:
case 1874:
case 3847:
case 4054:
case 2310:
case 3336:
case 2624:
case 885:
case 1936:
case 1916:
case 3:
case 875:
case 4013:
case 2025:
case 3999:
case 1019:
case 2960:
case 4033:
case 1748:
case 307:
case 3378:
case 480:
case 1848:
case 3327:
case 1927:
case 3724:
case 3397:
case 3794:
case 3883:
case 3037:
case 1175:
case 584:
case 3461:
case 2196:
case 3894:
case 2315:
case 2169:
case 3190:
case 1329:
case 336:
case 919:
case 3068:
case 3929:
case 2541:
case 3421:
case 1036:
case 3969:
case 224:
case 3542:
case 332:
case 1369:
case 704:
case 2129:
case 591:
case 2990:
case 3318:
case 2199:
case 2920:
case 2554:
case 301:
case 916:
case 1938:
case 3408:
case 2492:
case 2065:
case 2002:
case 2485:
case 3764:
case 3803:
case 1326:
case 4073:
case 3926:
case 3864:
case 1079:
case 3491:
case 1753:
case 5:
case 2995:
case 2982:
case 844:
case 148:
case 670:
case 3029:
case 2533:
case 3376:
case 2264:
case 1976:
case 1110:
case 1746:
case 2603:
case 1834:
case 1317:
case 1814:
case 771:
case 2370:
case 2664:
case 1734:
case 1097:
case 3937:
case 1407:
case 3486:
case 1645:
case 1078:
case 48:
case 3102:
case 2060:
case 2198:
case 1245:
case 211:
case 47:
case 2925:
case 1471:
case 3099:
case 536:
case 3409:
case 1126:
case 2366:
case 2848:
case 1025:
case 2443:
case 3360:
case 3138:
case 1647:
case 319:
case 456:
case 936:
case 1960:
case 2019:
case 851:
case 3584:
case 1169:
case 2076:
case 3915:
case 1335:
case 1082:
case 1405:
case 1462:
case 3935:
case 2175:
case 1196:
case 3119:
case 3432:
case 2398:
case 1352:
case 729:
case 1965:
case 3302:
case 3952:
case 240:
case 1294:
case 2018:
case 2749:
case 2979:
case 117:
case 2487:
case 2411:
case 9:
case 1117:
case 1181:
case 465:
case 762:
case 652:
case 3075:
case 3648:
case 2944:
case 3930:
case 1400:
case 1224:
case 2774:
case 1168:
case 3450:
case 722:
case 1310:
case 2874:
case 3248:
case 202:
case 2877:
case 3699:
case 1278:
case 1710:
case 2947:
case 1730:
case 3266:
case 2828:
case 1810:
case 558:
case 3299:
case 2423:
case 1627:
case 713:
case 2801:
case 1697:
case 2064:
case 3229:
case 126:
case 567:
case 2555:
case 2493:
case 2349:
case 3865:
case 1297:
case 271:
case 3802:
case 4072:
case 166:
case 1561:
case 281:
case 2798:
case 1752:
case 273:
case 2202:
case 3601:
case 350:
case 418:
case 323:
case 1651:
case 321:
case 1040:
case 2512:
case 0:
case 1815:
case 2602:
case 3201:
case 1735:
case 363:
case 3531:
case 3511:
case 2829:
case 3587:
case 1835:
case 2899:
case 976:
case 1506:
case 2799:
case 986:
case 3628:
case 1216:
case 654:
case 3277:
case 2550:
case 1636:
case 1589:
case 3164:
case 2866:
case 204:
case 2521:
case 262:
case 576:
case 3739:
case 586:
case 3719:
case 3839:
case 1690:
case 3675:
case 194:
case 2442:
case 187:
case 405:
case 1334:
case 731:
case 2770:
case 1220:
case 2218:
case 1737:
case 4089:
case 1094:
case 2238:
case 3914:
case 1717:
case 2870:
case 1314:
case 1083:
case 2267:
case 1346:
case 2618:
case 1620:
case 3946:
case 3776:
case 1868:
case 2174:
case 2638:
case 269:
case 4006:
case 1768:
case 1353:
case 842:
case 3433:
case 1903:
case 3867:
case 1282:
case 3049:
case 3953:
case 3303:
case 967:
case 3364:
case 2148:
case 1695:
case 3738:
case 447:
case 3718:
case 3270:
case 2557:
case 2619:
case 1869:
case 1047:
case 2586:
case 89:
case 1625:
case 1769:
case 1572:
case 2639:
case 2219:
case 4088:
case 438:
case 2945:
case 849:
case 1225:
case 1234:
case 3920:
case 1646:
case 992:
case 1320:
case 3485:
case 2338:
case 2160:
case 203:
case 2408:
case 1214:
case 1052:
case 750:
case 2098:
case 1634:
case 2367:
case 1246:
case 2764:
case 761:
case 2001:
case 2491:
case 653:
case 2421:
case 94:
case 3375:
case 364:
case 42:
case 2996:
case 1845:
case 3422:
case 232:
case 324:
case 46:
case 2028:
case 2077:
case 1390:
case 3129:
case 1151:
case 2486:
case 3101:
case 1472:
case 274:
case 906:
case 3198:
case 2319:
case 3060:
case 428:
case 3480:
case 1325:
case 859:
case 2099:
case 3925:
case 2339:
case 311:
case 2029:
case 3533:
case 1395:
case 3982:
case 1144:
case 1035:
case 3264:
case 714:
case 2376:
case 1840:
case 3603:
case 1116:
case 937:
case 3664:
case 3370:
case 457:
case 2584:
case 212:
case 2935:
case 3329:
case 136:
case 2455:
case 2249:
case 1488:
case 1037:
case 537:
case 1017:
case 1894:
case 3978:
case 485:
case 107:
case 1378:
case 2167:
case 3848:
case 3366:
case 3927:
case 1724:
case 506:
case 3399:
case 2523:
case 1336:
case 3456:
case 1096:
case 3936:
case 3916:
case 1:
case 1316:
case 644:
case 4063:
case 3377:
case 1344:
case 1977:
case 3774:
case 3944:
case 1747:
case 1069:
case 2248:
case 4004:
case 1928:
case 2910:
case 1489:
case 599:
case 1847:
case 3328:
case 2952:
case 2365:
case 1998:
case 3038:
case 309:
case 2302:
case 2119:
case 592:
case 2139:
case 3018:
case 1125:
case 1379:
case 3301:
case 1351:
case 3979:
case 1901:
case 3411:
case 3487:
case 3484:
case 4071:
case 3064:
case 1215:
case 214:
case 1879:
case 3493:
case 3555:
case 1505:
case 1949:
case 1053:
case 1562:
case 2229:
case 383:
case 1635:
case 2702:
case 2765:
case 3728:
case 797:
case 2699:
case 774:
case 3828:
case 2266:
case 3374:
case 3660:
case 1744:
case 3777:
case 784:
case 1140:
case 3423:
case 2299:
case 830:
case 895:
case 2543:
case 408:
case 2666:
case 1816:
case 926:
case 841:
case 2760:
case 2556:
case 2860:
case 3799:
case 4058:
case 1324:
case 1878:
case 3766:
case 2103:
case 3924:
case 1727:
case 3550:
case 435:
case 1230:
case 732:
case 1778:
case 2228:
case 739:
case 1383:
case 1014:
case 703:
case 2601:
case 1897:
case 3983:
case 701:
case 69:
case 221:
case 587:
case 1652:
case 2698:
case 649:
case 1046:
case 2511:
case 261:
case 3218:
case 994:
case 3667:
case 3508:
case 2914:
case 1558:
case 329:
case 4000:
case 2585:
case 2776:
case 2946:
case 1895:
case 3267:
case 1882:
case 15:
case 2876:
case 369:
case 1795:
case 3638:
case 2739:
case 2441:
case 2819:
case 1669:
case 362:
case 1725:
case 2839:
case 1296:
case 2719:
case 234:
case 3442:
case 2048:
case 2522:
case 3149:
case 2074:
case 1790:
case 3586:
case 127:
case 4005:
case 2580:
case 719:
case 3875:
case 1183:
case 167:
case 526:
case 1194:
case 2303:
case 2049:
case 854:
case 1124:
case 158:
case 2867:
case 1617:
case 2364:
case 3148:
case 2670:
case 1637:
case 2767:
case 712:
case 2818:
case 1820:
case 1668:
case 1281:
case 2738:
case 2270:
case 1237:
case 1507:
case 716:
case 3244:
case 1277:
case 3636:
case 2500:
case 2878:
case 2324:
case 2827:
case 1164:
case 2778:
case 3616:
case 3644:
case 1556:
case 3236:
case 1677:
case 3506:
case 569:
case 1628:
case 2610:
case 3279:
case 276:
case 163:
case 3735:
case 1531:
case 1698:
case 3715:
case 286:
case 1587:
case 3835:
case 522:
case 150:
case 2014:
case 2383:
case 123:
case 355:
case 3651:
case 121:
case 3297:
case 1802:
case 1702:
case 3752:
case 2879:
case 3697:
case 2215:
case 2851:
case 2562:
case 1229:
case 2053:
case 2751:
case 1543:
case 2836:
case 2140:
case 3045:
case 3134:
case 3627:
case 3114:
case 2816:
case 1666:
case 2844:
case 1699:
case 3146:
case 983:
case 3710:
case 2974:
case 3227:
case 3810:
case 973:
case 2347:
case 1580:
case 2571:
case 267:
case 3225:
case 2345:
case 805:
case 2559:
case 3896:
case 83:
case 182:
case 3869:
case 3047:
case 583:
case 172:
case 227:
case 3769:
case 3572:
case 707:
case 2890:
case 573:
case 608:
case 3695:
case 2281:
case 646:
case 2668:
case 2820:
case 2507:
case 1838:
case 2720:
case 1718:
case 1270:
case 2617:
case 1433:
case 3903:
case 2124:
case 2681:
case 3282:
case 2268:
case 1953:
case 1767:
case 1413:
case 4043:
case 1364:
case 2882:
case 2895:
case 3620:
case 2226:
case 3868:
case 2795:
case 847:
case 4056:
case 1876:
case 3768:
case 922:
case 3881:
case 3817:
case 3404:
case 3737:
case 2626:
case 3094:
case 745:
case 3781:
case 1592:
case 1914:
case 3717:
case 2558:
case 504:
case 3463:
case 3083:
case 2269:
case 377:
case 394:
case 134:
case 3024:
case 2725:
case 1275:
case 1441:
case 4087:
case 2296:
case 1839:
case 1165:
case 1319:
case 1339:
case 3471:
case 4084:
case 1099:
case 3939:
case 1409:
case 1066:
case 184:
case 888:
case 3027:
case 2151:
case 3645:
case 3078:
case 197:
case 2472:
case 337:
case 1917:
case 1981:
case 2136:
case 3317:
case 2653:
case 3381:
case 3734:
case 1937:
case 2970:
case 2116:
case 3368:
case 2144:
case 675:
case 3130:
case 2253:
case 348:
case 1968:
case 685:
case 1376:
case 911:
case 3746:
case 1803:
case 3326:
case 964:
case 1367:
case 3640:
case 2178:
case 2634:
case 1864:
case 1703:
case 3051:
case 2614:
case 776:
case 3079:
case 1491:
case 3753:
case 1001:
case 2504:
case 444:
case 2234:
case 3240:
case 2052:
case 1098:
case 3938:
case 103:
case 2214:
case 3458:
case 533:
case 3115:
case 2010:
case 1542:
case 132:
case 509:
case 2390:
case 87:
case 1077:
case 3044:
case 3135:
case 2030:
case 2975:
case 3016:
case 1421:
case 3396:
case 3036:
case 1930:
case 2195:
case 3090:
case 2747:
case 2182:
case 3400:
case 3330:
case 909:
case 3168:
case 2344:
case 1450:
case 940:
case 1910:
case 1176:
case 931:
case 856:
case 2069:
case 3117:
case 460:
case 2096:
case 3181:
case 3573:
case 2316:
case 3137:
case 1648:
case 2:
case 3683:
case 2351:
case 2026:
case 3694:
case 317:
case 3283:
case 245:
case 1432:
case 524:
case 293:
case 1952:
case 2998:
case 2125:
case 62:
case 4042:
case 1412:
case 2037:
case 2397:
case 2894:
case 2017:
case 2461:
case 112:
case 1915:
case 3315:
case 2488:
case 1593:
case 758:
case 3335:
case 1249:
case 2068:
case 3095:
case 825:
case 1523:
case 2999:
case 2120:
case 1360:
case 996:
case 1138:
case 3960:
case 2824:
case 1167:
case 727:
case 2378:
case 207:
case 3126:
case 1274:
case 2724:
case 3247:
case 2327:
case 640:
case 178:
case 3685:
case 633:
case 897:
case 1446:
case 2567:
case 631:
case 884:
case 2691:
case 743:
case 2538:
case 3285:
case 795:
case 1414:
case 1707:
case 3904:
case 492:
case 3354:
case 1304:
case 1954:
case 3757:
case 1520:
case 499:
case 2193:
case 2184:
case 252:
case 96:
case 2342:
case 4051:
case 1871:
case 4079:
case 602:
case 1941:
case 1771:
case 2221:
case 92:
case 3575:
case 1073:
case 2880:
case 1759:
case 3721:
case 1525:
case 2209:
case 2539:
case 3023:
case 928:
case 3821:
case 801:
case 448:
case 2686:
case 2722:
case 2822:
case 957:
case 2892:
case 2257:
case 3570:
case 2785:
case 4027:
case 1913:
case 3084:
case 2657:
case 2576:
case 1453:
case 18:
case 1582:
case 832:
case 3791:
case 1933:
case 3403:
case 3812:
case 557:
case 270:
case 1688:
case 2655:
case 280:
case 3712:
case 3832:
case 2811:
case 2887:
case 2033:
case 3529:
case 156:
case 2731:
case 2711:
case 4025:
case 4082:
case 3243:
case 2323:
case 613:
case 3750:
case 3566:
case 2474:
case 975:
case 568:
case 3850:
case 3643:
case 1578:
case 1800:
case 611:
case 985:
case 4020:
case 664:
case 3042:
case 3528:
case 56:
case 3656:
case 812:
case 2973:
case 1516:
case 624:
case 2650:
case 2843:
case 52:
case 1862:
case 2612:
case 1579:
case 1705:
case 3231:
case 3687:
case 2054:
case 2212:
case 125:
case 3598:
case 2961:
case 3693:
case 2057:
case 1435:
case 3355:
case 1955:
case 1362:
case 2122:
case 3284:
case 515:
case 1415:
case 1158:
case 3460:
case 2192:
case 426:
case 2185:
case 946:
case 908:
case 3223:
case 2009:
case 1547:
case 2466:
case 3623:
case 1072:
case 4040:
case 2989:
case 1410:
case 2428:
case 752:
case 118:
case 990:
case 1430:
case 455:
case 814:
case 3900:
case 2723:
case 1107:
case 2021:
case 622:
case 2823:
case 2356:
case 2784:
case 2311:
case 2884:
case 2793:
case 2401:
case 2091:
case 3186:
case 1912:
case 3312:
case 759:
case 2498:
case 1583:
case 1452:
case 2180:
case 1932:
case 3813:
case 872:
case 3713:
case 1426:
case 2654:
case 3833:
case 13:
case 487:
case 2032:
case 2392:
case 300:
case 349:
case 2385:
case 477:
case 1540:
case 2254:
case 1162:
case 3155:
case 2050:
case 4083:
case 535:
case 3242:
case 2641:
case 590:
case 1089:
case 2322:
case 1496:
case 1006:
case 50:
case 889:
case 3439:
case 3971:
case 3112:
case 1545:
case 3959:
case 508:
case 2380:
case 210:
case 3841:
case 2187:
case 147:
case 1986:
case 2131:
case 2613:
case 1863:
case 2470:
case 2156:
case 1763:
case 1804:
case 3854:
case 2633:
case 4047:
case 2213:
case 683:
case 3476:
case 671:
case 2055:
case 1088:
case 834:
case 138:
case 2233:
case 915:
case 694:
case 1021:
case 2273:
case 1723:
case 3416:
case 2107:
case 3436:
case 1356:
case 59:
case 500:
case 3389:
case 1989:
case 1428:
case 1477:
case 3444:
case 2950:
case 2524:
case 141:
case 2159:
case 2912:
case 2932:
case 542:
case 195:
case 390:
case 2452:
case 335:
case 143:
case 1008:
case 1311:
case 30:
case 1387:
case 3911:
case 3987:
case 1784:
case 1091:
case 3931:
case 1331:
case 1884:
case 2362:
case 2955:
case 2435:
case 78:
case 1122:
case 77:
case 3361:
case 1961:
case 3497:
case 473:
case 3427:
case 481:
case 1086:
case 2547:
case 2072:
case 21:
case 3478:
case 2158:
case 3873:
case 1343:
case 1499:
case 4064:
case 1009:
case 3773:
case 247:
case 3372:
case 1742:
case 1187:
case 1972:
case 1131:
case 2909:
case 2359:
case 3980:
case 1213:
case 1564:
case 666:
case 3005:
case 3495:
case 3062:
case 1233:
case 2468:
case 2863:
case 2437:
case 1613:
case 2481:
case 626:
case 1633:
case 3106:
case 1156:
case 2804:
case 2763:
case 1392:
case 725:
case 3985:
case 3992:
case 2540:
case 3204:
case 3420:
case 462:
case 3604:
case 3161:
case 2006:
case 1475:
case 1241:
case 3188:
case 2162:
case 858:
case 1322:
case 357:
case 3671:
case 1286:
case 1822:
case 1539:
case 3259:
case 3445:
case 3271:
case 2525:
case 1686:
case 1576:
case 816:
case 3607:
case 411:
case 27:
case 3568:
case 2595:
case 4060:
case 28:
case 2453:
case 328:
case 2582:
case 3207:
case 1892:
case 3517:
case 1208:
case 2414:
case 1691:
case 3258:
case 2807:
case 2954:
case 1518:
case 3440:
case 1123:
case 3658:
case 3526:
case 464:
case 32:
case 2446:
case 3596:
case 1780:
case 2871:
case 1880:
case 2073:
case 2771:
case 2941:
case 4002:
case 2590:
case 3872:
case 1193:
case 718:
case 553:
case 3569:
case 1621:
case 3942:
case 3373:
case 692:
case 2516:
case 1973:
case 2689:
case 1843:
case 3510:
case 431:
case 951:
case 4018:
case 2289:
case 3200:
case 3424:
case 4038:
case 953:
case 409:
case 2606:
case 2544:
case 433:
case 3004:
case 402:
case 1212:
case 1232:
case 3063:
case 3483:
case 3552:
case 1502:
case 705:
case 3761:
case 3888:
case 73:
case 2805:
case 3788:
case 265:
case 807:
case 2762:
case 2579:
case 1449:
case 1255:
case 738:
case 3535:
case 2288:
case 3262:
case 3993:
case 3205:
case 1811:
case 1384:
case 3984:
case 1787:
case 4039:
case 1711:
case 3515:
case 2688:
case 8:
case 170:
case 606:
case 385:
case 1474:
case 3889:
case 2800:
case 2578:
case 3789:
case 3706:
case 2163:
case 1756:
case 845:
case 3923:
case 893:
case 2104:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746532801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,];
var gg_b = "1746532801/";

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
