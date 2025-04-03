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
case 266:
case 893:
case 1095:
case 724:
case 3026:
case 1279:
case 1522:
case 3832:
case 1291:
case 1497:
case 612:
case 2889:
case 3706:
case 686:
case 1100:
case 2896:
case 2535:
case 705:
case 760:
case 2833:
case 1034:
case 2164:
case 1618:
case 1703:
case 2666:
case 874:
case 787:
case 1023:
case 1662:
case 370:
case 938:
case 1570:
case 1321:
case 3785:
case 1127:
case 1697:
case 3680:
case 2923:
case 2380:
case 246:
case 1784:
case 553:
case 4000:
case 2131:
case 1419:
case 3637:
case 816:
case 1728:
case 1265:
case 1340:
case 1462:
case 2337:
case 740:
case 3264:
case 1658:
case 1008:
case 3337:
case 1508:
case 1926:
case 3131:
case 2637:
case 1640:
case 751:
case 1777:
case 2922:
case 1509:
case 1745:
case 4065:
case 1358:
case 1561:
case 1994:
case 1810:
case 2970:
case 433:
case 1178:
case 192:
case 1200:
case 3934:
case 714:
case 3380:
case 2680:
case 3923:
case 997:
case 730:
case 2366:
case 1850:
case 3833:
case 1523:
case 3164:
case 826:
case 578:
case 1165:
case 968:
case 1534:
case 3824:
case 270:
case 2832:
case 236:
case 366:
case 2026:
case 1711:
case 3594:
case 1663:
case 2706:
case 639:
case 3908:
case 4079:
case 3526:
case 1595:
case 35:
case 1227:
case 1149:
case 717:
case 499:
case 3958:
case 68:
case 2196:
case 2756:
case 2864:
case 2133:
case 1148:
case 659:
case 26:
case 306:
case 33:
case 1395:
case 3959:
case 1980:
case 2188:
case 275:
case 750:
case 682:
case 3335:
case 1323:
case 2189:
case 616:
case 332:
case 3774:
case 1670:
case 2921:
case 3066:
case 1334:
case 1519:
case 1712:
case 3962:
case 453:
case 869:
case 886:
case 123:
case 24:
case 4092:
case 1225:
case 1250:
case 3580:
case 693:
case 1422:
case 1597:
case 973:
case 1768:
case 1308:
case 3537:
case 1293:
case 2963:
case 1309:
case 271:
case 2232:
case 1361:
case 1558:
case 1713:
case 626:
case 3963:
case 342:
case 761:
case 2537:
case 1891:
case 1609:
case 4036:
case 1423:
case 3435:
case 4093:
case 784:
case 1661:
case 196:
case 3037:
case 371:
case 2919:
case 34:
case 1495:
case 3080:
case 2224:
case 1097:
case 727:
case 1110:
case 2580:
case 2233:
case 3566:
case 772:
case 1267:
case 1019:
case 2132:
case 1623:
case 2997:
case 3921:
case 741:
case 1753:
case 1193:
case 3189:
case 1634:
case 765:
case 700:
case 2774:
case 1370:
case 2958:
case 1150:
case 3196:
case 3864:
case 3756:
case 3133:
case 77:
case 1322:
case 23:
case 1563:
case 4010:
case 113:
case 1695:
case 206:
case 3557:
case 3290:
case 2845:
case 476:
case 3586:
case 57:
case 96:
case 3829:
case 1539:
case 3168:
case 2710:
case 1314:
case 2057:
case 3112:
case 3315:
case 147:
case 2252:
case 3828:
case 3169:
case 1538:
case 3884:
case 1905:
case 2071:
case 4074:
case 962:
case 125:
case 3542:
case 2472:
case 2851:
case 2441:
case 1476:
case 1230:
case 919:
case 208:
case 500:
case 2042:
case 2113:
case 565:
case 3792:
case 2620:
case 167:
case 1971:
case 3983:
case 2655:
case 273:
case 2017:
case 1504:
case 2201:
case 414:
case 2407:
case 2415:
case 2373:
case 3803:
case 3517:
case 527:
case 3673:
case 2725:
case 2190:
case 1998:
case 1174:
case 691:
case 971:
case 3147:
case 1676:
case 2793:
case 2982:
case 1957:
case 3175:
case 1732:
case 1986:
case 451:
case 2802:
case 942:
case 121:
case 2560:
case 3641:
case 394:
case 440:
case 3793:
case 2938:
case 929:
case 1376:
case 888:
case 401:
case 2213:
case 3811:
case 3802:
case 3560:
case 2175:
case 179:
case 4016:
case 3212:
case 3407:
case 1724:
case 3415:
case 2320:
case 3620:
case 3655:
case 2983:
case 2152:
case 1796:
case 1187:
case 1414:
case 1156:
case 2749:
case 3373:
case 1654:
case 1004:
case 2517:
case 1381:
case 3275:
case 550:
case 4030:
case 2598:
case 3099:
case 3851:
case 1083:
case 3071:
case 487:
case 3113:
case 3042:
case 3098:
case 2599:
case 3247:
case 460:
case 535:
case 2904:
case 1546:
case 1116:
case 743:
case 1454:
case 1038:
case 2473:
case 93:
case 2290:
case 4087:
case 3420:
case 3877:
case 4056:
case 3252:
case 1039:
case 2169:
case 3607:
case 1844:
case 3057:
case 3086:
case 3686:
case 2643:
case 3657:
case 2357:
case 3343:
case 3184:
case 2386:
case 47:
case 828:
case 2507:
case 576:
case 2778:
case 1185:
case 952:
case 2954:
case 238:
case 530:
case 2203:
case 465:
case 3129:
case 441:
case 2145:
case 397:
case 3671:
case 2399:
case 2177:
case 1683:
case 3699:
case 2371:
case 472:
case 1054:
case 1604:
case 2555:
case 703:
case 1106:
case 2284:
case 2102:
case 514:
case 3020:
case 3486:
case 3251:
case 1581:
case 4085:
case 3072:
case 484:
case 1244:
case 2765:
case 3499:
case 895:
case 1576:
case 1483:
case 3277:
case 3852:
case 3471:
case 2541:
case 2572:
case 461:
case 2914:
case 3360:
case 348:
case 445:
case 3103:
case 2277:
case 2852:
case 2471:
case 2499:
case 1076:
case 4044:
case 3229:
case 501:
case 431:
case 1887:
case 3572:
case 3890:
case 2245:
case 248:
case 1856:
case 2360:
case 3073:
case 818:
case 2700:
case 1304:
case 3853:
case 3555:
case 144:
case 3520:
case 185:
case 3305:
case 2573:
case 3443:
case 3317:
case 2251:
case 1554:
case 3284:
case 3111:
case 2605:
case 2055:
case 753:
case 107:
case 970:
case 560:
case 2698:
case 2642:
case 505:
case 268:
case 2981:
case 3145:
case 338:
case 3954:
case 3398:
case 587:
case 3203:
case 2699:
case 1383:
case 2812:
case 120:
case 1646:
case 688:
case 2869:
case 2128:
case 1920:
case 2671:
case 3399:
case 450:
case 181:
case 3386:
case 3151:
case 2007:
case 1941:
case 3778:
case 2727:
case 936:
case 799:
case 3507:
case 417:
case 438:
case 1675:
case 732:
case 644:
case 2951:
case 3984:
case 335:
case 1503:
case 1817:
case 3674:
case 3330:
case 2630:
case 3176:
case 3804:
case 2374:
case 1770:
case 2154:
case 3387:
case 3356:
case 2794:
case 2416:
case 2656:
case 1173:
case 2687:
case 3181:
case 1652:
case 1002:
case 27:
case 2977:
case 3928:
case 317:
case 1215:
case 1207:
case 1412:
case 1401:
case 1241:
case 1906:
case 2544:
case 729:
case 2911:
case 1272:
case 3044:
case 1886:
case 664:
case 815:
case 1051:
case 190:
case 1601:
case 1612:
case 227:
case 1220:
case 2846:
case 3585:
case 2456:
case 3316:
case 1584:
case 963:
case 2616:
case 2085:
case 573:
case 620:
case 1312:
case 821:
case 3846:
case 1107:
case 74:
case 2903:
case 3085:
case 3456:
case 2316:
case 1368:
case 3281:
case 3544:
case 2474:
case 1708:
case 1843:
case 2044:
case 1709:
case 231:
case 742:
case 361:
case 3911:
case 3902:
case 1761:
case 3006:
case 2214:
case 3154:
case 4015:
case 2387:
case 1511:
case 1860:
case 2929:
case 3794:
case 3416:
case 76:
case 2506:
case 1352:
case 1795:
case 1155:
case 3977:
case 468:
case 300:
case 365:
case 3630:
case 2176:
case 2804:
case 1413:
case 558:
case 1347:
case 2330:
case 255:
case 4071:
case 1575:
case 770:
case 3881:
case 2074:
case 1873:
case 1053:
case 637:
case 3030:
case 1762:
case 3574:
case 538:
case 881:
case 2283:
case 1547:
case 387:
case 3969:
case 4042:
case 702:
case 2530:
case 1105:
case 2239:
case 1484:
case 1311:
case 2587:
case 615:
case 2306:
case 3485:
case 2238:
case 3282:
case 3104:
case 999:
case 736:
case 2913:
case 3183:
case 3344:
case 1628:
case 1:
case 301:
case 1759:
case 340:
case 885:
case 1377:
case 1403:
case 844:
case 251:
case 1512:
case 1501:
case 1974:
case 3406:
case 2953:
case 3947:
case 3685:
case 3016:
case 214:
case 2182:
case 3780:
case 1186:
case 1351:
case 1684:
case 1568:
case 746:
case 625:
case 2947:
case 3953:
case 314:
case 903:
case 2016:
case 3204:
case 3182:
case 2406:
case 1205:
case 1217:
case 1069:
case 1411:
case 1012:
case 1143:
case 195:
case 810:
case 1815:
case 1513:
case 1328:
case 4060:
case 2344:
case 201:
case 1645:
case 1987:
case 3990:
case 1956:
case 1329:
case 351:
case 3587:
case 3556:
case 1286:
case 1590:
case 1052:
case 2087:
case 2606:
case 1763:
case 789:
case 4043:
case 766:
case 1841:
case 2282:
case 2104:
case 1047:
case 752:
case 597:
case 2968:
case 355:
case 2881:
case 1242:
case 834:
case 698:
case 3283:
case 1477:
case 2246:
case 1855:
case 205:
case 1075:
case 3444:
case 475:
case 1949:
case 419:
case 2218:
case 3798:
case 1783:
case 2219:
case 462:
case 1331:
case 2924:
case 768:
case 3932:
case 3757:
case 2988:
case 299:
case 3786:
case 456:
case 3197:
case 2861:
case 55:
case 3400:
case 3378:
case 2327:
case 696:
case 3010:
case 1088:
case 951:
case 2536:
case 3365:
case 2593:
case 3119:
case 2258:
case 3822:
case 471:
case 3118:
case 3093:
case 1364:
case 2760:
case 3548:
case 3592:
case 546:
case 3221:
case 2049:
case 3427:
case 4080:
case 3600:
case 1096:
case 3025:
case 2163:
case 44:
case 2092:
case 3705:
case 3549:
case 2479:
case 1967:
case 303:
case 2550:
case 2525:
case 2297:
case 2600:
case 2050:
case 2025:
case 3163:
case 1524:
case 3834:
case 2221:
case 2548:
case 2592:
case 2427:
case 3300:
case 3550:
case 3525:
case 3823:
case 3491:
case 3479:
case 203:
case 116:
case 2717:
case 3536:
case 2365:
case 2162:
case 3259:
case 1032:
case 3665:
case 429:
case 1910:
case 3760:
case 1588:
case 940:
case 3679:
case 3861:
case 924:
case 3743:
case 2757:
case 3809:
case 3691:
case 399:
case 2379:
case 3678:
case 3121:
case 174:
case 1782:
case 2010:
case 3989:
case 2400:
case 2378:
case 536:
case 3808:
case 406:
case 1925:
case 278:
case 623:
case 2742:
case 960:
case 905:
case 3218:
case 2567:
case 2159:
case 3262:
case 3924:
case 738:
case 3140:
case 502:
case 432:
case 193:
case 3067:
case 972:
case 813:
case 1031:
case 562:
case 2161:
case 3897:
case 2367:
case 692:
case 1432:
case 3223:
case 2493:
case 2821:
case 2270:
case 941:
case 575:
case 3234:
case 466:
case 3858:
case 2964:
case 2450:
case 3310:
case 1294:
case 489:
case 97:
case 2579:
case 56:
case 2027:
case 3449:
case 45:
case 3091:
case 3859:
case 243:
case 2840:
case 556:
case 3448:
case 3492:
case 3527:
case 1837:
case 945:
case 3393:
case 2863:
case 3208:
case 1389:
case 571:
case 3170:
case 2741:
case 961:
case 2772:
case 3065:
case 2123:
case 3209:
case 542:
case 3467:
case 139:
case 984:
case 896:
case 2195:
case 263:
case 1324:
case 2720:
case 3692:
case 3648:
case 3862:
case 333:
case 3500:
case 3350:
case 2410:
case 3818:
case 446:
case 683:
case 3773:
case 2650:
case 1624:
case 2862:
case 2500:
case 3931:
case 3720:
case 2122:
case 3625:
case 2350:
case 1866:
case 2649:
case 773:
case 3693:
case 1978:
case 3636:
case 2336:
case 931:
case 2393:
case 1689:
case 2208:
case 3863:
case 2261:
case 794:
case 823:
case 186:
case 1991:
case 2065:
case 2209:
case 3610:
case 3027:
case 436:
case 2858:
case 53:
case 1433:
case 3450:
case 3964:
case 1714:
case 3425:
case 2295:
case 3840:
case 2527:
case 1965:
case 2091:
case 2859:
case 1424:
case 3707:
case 708:
case 149:
case 2223:
case 402:
case 3367:
case 3109:
case 2667:
case 2234:
case 1489:
case 3493:
case 935:
case 2438:
case 3482:
case 257:
case 1520:
case 344:
case 4051:
case 3304:
case 1073:
case 2874:
case 1102:
case 1284:
case 2439:
case 782:
case 1305:
case 385:
case 2581:
case 1317:
case 1443:
case 3915:
case 759:
case 2576:
case 1228:
case 1572:
case 3764:
case 3856:
case 4077:
case 1914:
case 3076:
case 1660:
case 1791:
case 805:
case 887:
case 1357:
case 1779:
case 1515:
case 234:
case 3206:
case 4002:
case 1507:
case 2382:
case 2404:
case 631:
case 364:
case 1954:
case 138:
case 1203:
case 1398:
case 824:
case 1342:
case 1145:
case 2973:
case 3731:
case 1177:
case 2683:
case 1371:
case 2346:
case 1698:
case 2816:
case 1868:
case 528:
case 2144:
case 4003:
case 220:
case 2731:
case 2646:
case 2955:
case 2920:
case 3639:
case 1343:
case 1211:
case 281:
case 1015:
case 1686:
case 2682:
case 3638:
case 726:
case 591:
case 2941:
case 334:
case 2206:
case 2446:
case 1471:
case 3483:
case 1277:
case 1072:
case 4029:
case 2907:
case 2076:
case 814:
case 1041:
case 99:
case 1103:
case 67:
case 1360:
case 2764:
case 4028:
case 709:
case 3106:
case 641:
case 2081:
case 3874:
case 3438:
case 851:
case 2482:
case 2830:
case 357:
case 665:
case 2285:
case 1875:
case 3581:
case 1457:
case 1573:
case 992:
case 1020:
case 207:
case 1055:
case 1620:
case 2971:
case 2504:
case 1946:
case 588:
case 1212:
case 831:
case 1201:
case 337:
case 2999:
case 280:
case 660:
case 605:
case 923:
case 3381:
case 1373:
case 1725:
case 3414:
case 3187:
case 2354:
case 2681:
case 2998:
case 3789:
case 2806:
case 2174:
case 4:
case 1153:
case 194:
case 1641:
case 1736:
case 1982:
case 2676:
case 3130:
case 1793:
case 624:
case 2957:
case 3943:
case 3788:
case 379:
case 2986:
case 418:
case 1802:
case 1811:
case 1560:
case 4013:
case 1543:
case 3614:
case 2256:
case 601:
case 3116:
case 640:
case 3038:
case 3960:
case 1057:
case 3844:
case 1420:
case 247:
case 4090:
case 2538:
case 3039:
case 835:
case 2046:
case 2917:
case 1275:
case 1851:
case 2583:
case 1247:
case 2476:
case 2230:
case 2885:
case 749:
case 1113:
case 158:
case 325:
case 1598:
case 1542:
case 3905:
case 2083:
case 3046:
case 87:
case 4075:
case 1253:
case 3583:
case 913:
case 3314:
case 3539:
case 3481:
case 3287:
case 3256:
case 254:
case 3538:
case 1169:
case 841:
case 2039:
case 1101:
case 739:
case 1938:
case 2376:
case 2789:
case 1341:
case 676:
case 321:
case 2724:
case 380:
case 3999:
case 4068:
case 655:
case 1983:
case 1792:
case 3504:
case 861:
case 398:
case 3681:
case 3998:
case 4001:
case 1505:
case 1749:
case 495:
case 4012:
case 1803:
case 2381:
case 1517:
case 2712:
case 3248:
case 678:
case 4033:
case 14:
case 2250:
case 2597:
case 2422:
case 2021:
case 3966:
case 4024:
case 577:
case 2768:
case 142:
case 3878:
case 409:
case 2559:
case 3713:
case 2040:
case 2167:
case 3879:
case 1037:
case 3661:
case 396:
case 2558:
case 1232:
case 3423:
case 3059:
case 1435:
case 1694:
case 3322:
case 947:
case 2210:
case 0:
case 1196:
case 2622:
case 1864:
case 1940:
case 3695:
case 904:
case 16:
case 313:
case 3409:
case 2775:
case 2980:
case 175:
case 3461:
case 522:
case 2323:
case 1189:
case 3634:
case 3408:
case 2800:
case 3753:
case 2747:
case 3136:
case 1921:
case 3018:
case 2334:
case 1730:
case 1335:
case 2019:
case 3518:
case 2267:
case 2623:
case 2409:
case 3980:
case 3747:
case 1066:
case 2753:
case 911:
case 2136:
case 3519:
case 3334:
case 2193:
case 2408:
case 549:
case 493:
case 2125:
case 2150:
case 1958:
case 2790:
case 1394:
case 3063:
case 2322:
case 3395:
case 1326:
case 13:
case 2865:
case 2563:
case 3148:
case 3192:
case 3752:
case 2058:
case 2608:
case 1289:
case 979:
case 2434:
case 2713:
case 4032:
case 3827:
case 1537:
case 3361:
case 2609:
case 459:
case 3167:
case 3309:
case 512:
case 2879:
case 2248:
case 3769:
case 1919:
case 1962:
case 3701:
case 788:
case 3712:
case 2097:
case 1224:
case 3021:
case 2249:
case 1918:
case 3768:
case 3250:
case 3225:
case 937:
case 1296:
case 3597:
case 790:
case 1233:
case 3422:
case 2321:
case 795:
case 3935:
case 2697:
case 2867:
case 2061:
case 39:
case 1131:
case 803:
case 3926:
case 4064:
case 3777:
case 3640:
case 2265:
case 2009:
case 2462:
case 1337:
case 3358:
case 2729:
case 3994:
case 439:
case 3509:
case 2658:
case 2008:
case 2095:
case 1961:
case 166:
case 3702:
case 1594:
case 2279:
case 1888:
case 2291:
case 189:
case 1909:
case 3836:
case 3421:
case 3893:
case 2363:
case 42:
case 1908:
case 4031:
case 3825:
case 3523:
case 1666:
case 728:
case 3165:
case 1824:
case 3534:
case 2892:
case 449:
case 3618:
case 3849:
case 102:
case 3703:
case 3458:
case 3034:
case 2318:
case 1231:
case 3892:
case 3848:
case 3619:
case 2440:
case 1035:
case 899:
case 170:
case 2534:
case 3497:
case 3291:
case 1832:
case 3522:
case 1026:
case 3095:
case 10:
case 2711:
case 574:
case 3279:
case 2663:
case 3100:
case 2836:
case 981:
case 1094:
case 2421:
case 2227:
case 3363:
case 3340:
case 3009:
case 559:
case 3061:
case 1637:
case 2359:
case 2926:
case 2777:
case 3728:
case 486:
case 2358:
case 58:
case 2561:
case 853:
case 469:
case 7:
case 3729:
case 1785:
case 516:
case 2178:
case 292:
case 2621:
case 3321:
case 41:
case 2200:
case 944:
case 2179:
case 2935:
case 2191:
case 3697:
case 2751:
case 3689:
case 779:
case 1693:
case 2389:
case 4009:
case 1741:
case 312:
case 636:
case 3135:
case 3991:
case 3688:
case 2632:
case 3332:
case 2388:
case 4008:
case 3979:
case 1195:
case 277:
case 1720:
case 1755:
case 1392:
case 1348:
case 988:
case 602:
case 2396:
case 1410:
case 3754:
case 3866:
case 3194:
case 2333:
case 670:
case 523:
case 1349:
case 2781:
case 1650:
case 737:
case 2031:
case 4034:
case 349:
case 83:
case 1367:
case 3488:
case 1436:
case 711:
case 3489:
case 1108:
case 832:
case 1222:
case 4095:
case 1591:
case 1964:
case 1450:
case 754:
case 2294:
case 3424:
case 1715:
case 1707:
case 22:
case 143:
case 1578:
case 747:
case 1449:
case 862:
case 3294:
case 1078:
case 2714:
case 1310:
case 704:
case 32:
case 1527:
case 1492:
case 819:
case 2424:
case 2965:
case 875:
case 3235:
case 1223:
case 1897:
case 2488:
case 2489:
case 3900:
case 322:
case 1862:
case 1500:
case 492:
case 133:
case 21:
case 1692:
case 3324:
case 780:
case 3396:
case 767:
case 2754:
case 1350:
case 1818:
case 2194:
case 1649:
case 3776:
case 689:
case 2978:
case 49:
case 1336:
case 1208:
case 84:
case 2332:
case 3388:
case 2979:
case 269:
case 2688:
case 3032:
case 3589:
case 2088:
case 38:
case 3237:
case 3431:
case 1593:
case 2089:
case 3588:
case 3664:
case 1258:
case 359:
case 606:
case 9:
case 3166:
case 63:
case 2364:
case 1760:
case 3910:
case 1049:
case 1300:
case 423:
case 1834:
case 1163:
case 1479:
case 2967:
case 4021:
case 1525:
case 1550:
case 3280:
case 1297:
case 2266:
case 2949:
case 3950:
case 1996:
case 1933:
case 2992:
case 1140:
case 2783:
case 1067:
case 2137:
case 836:
case 2331:
case 1465:
case 199:
case 1809:
case 1679:
case 2739:
case 1989:
case 1327:
case 374:
case 802:
case 1121:
case 1678:
case 781:
case 2738:
case 852:
case 3739:
case 734:
case 1627:
case 2993:
case 1010:
case 3738:
case 1400:
case 1378:
case 2925:
case 1742:
case 1798:
case 85:
case 3331:
case 889:
case 1159:
case 928:
case 1771:
case 2746:
case 293:
case 3137:
case 3096:
case 1600:
case 1050:
case 2524:
case 995:
case 1221:
case 1548:
case 1592:
case 3704:
case 619:
case 662:
case 2835:
case 1717:
case 216:
case 103:
case 4058:
case 2826:
case 2237:
case 1119:
case 2589:
case 3088:
case 1162:
case 309:
case 2166:
case 1093:
case 2894:
case 2910:
case 1118:
case 2664:
case 2171:
case 3740:
case 3677:
case 1146:
case 2:
case 3815:
case 2759:
case 2377:
case 3807:
case 1644:
case 151:
case 3987:
case 3956:
case 2013:
case 1990:
case 2198:
case 2512:
case 1385:
case 2974:
case 3721:
case 1953:
case 658:
case 2569:
case 480:
case 3001:
case 3651:
case 395:
case 2157:
case 2186:
case 1516:
case 3411:
case 792:
case 3402:
case 2568:
case 2684:
case 557:
case 328:
case 155:
case 4046:
case 3303:
case 1854:
case 1766:
case 2053:
case 2429:
case 3047:
case 2603:
case 3916:
case 783:
case 2762:
case 1444:
case 3553:
case 1283:
case 2547:
case 2428:
case 3855:
case 2719:
case 130:
case 1239:
case 2484:
case 3611:
case 1587:
case 3257:
case 3872:
case 404:
case 2243:
case 3451:
case 4082:
case 3286:
case 1306:
case 926:
case 1238:
case 3841:
case 447:
case 868:
case 2090:
case 694:
case 2257:
case 2872:
case 3302:
case 2590:
case 4038:
case 2286:
case 2052:
case 2602:
case 291:
case 2611:
case 454:
case 3090:
case 1606:
case 1056:
case 2763:
case 1485:
case 124:
case 3552:
case 1282:
case 581:
case 2047:
case 3053:
case 1968:
case 2160:
case 1030:
case 3575:
case 4083:
case 3873:
case 2242:
case 673:
case 2477:
case 3428:
case 3719:
case 2855:
case 2820:
case 187:
case 1912:
case 2075:
case 3762:
case 1574:
case 2721:
case 1016:
case 1685:
case 1947:
case 916:
case 2930:
case 507:
case 3501:
case 3512:
case 585:
case 3974:
case 2069:
case 3568:
case 544:
case 2402:
case 2217:
case 295:
case 2651:
case 2012:
case 3186:
case 959:
case 3759:
case 2815:
case 3377:
case 2328:
case 2513:
case 2807:
case 3628:
case 2740:
case 1183:
case 2677:
case 101:
case 1737:
case 3758:
case 318:
case 2987:
case 2645:
case 2329:
case 2956:
case 3142:
case 3198:
case 3013:
case 415:
case 3345:
case 3260:
case 939:
case 1276:
case 2447:
case 3029:
case 3577:
case 410:
case 3613:
case 2906:
case 2045:
case 3708:
case 3761:
case 2857:
case 2272:
case 3843:
case 145:
case 598:
case 3107:
case 2899:
case 290:
case 3301:
case 3312:
case 2871:
case 2255:
case 127:
case 1846:
case 2220:
case 1456:
case 288:
case 580:
case 3273:
case 1487:
case 3551:
case 1281:
case 3368:
case 2668:
case 567:
case 1616:
case 1735:
case 2805:
case 3347:
case 525:
case 3413:
case 172:
case 2770:
case 1374:
case 3003:
case 2647:
case 3511:
case 547:
case 3502:
case 1154:
case 1416:
case 1794:
case 2390:
case 1006:
case 1656:
case 3690:
case 2173:
case 1687:
case 1945:
case 2469:
case 2011:
case 504:
case 4014:
case 3944:
case 2401:
case 858:
case 3352:
case 2412:
case 2690:
case 1387:
case 2511:
case 2502:
case 554:
case 3468:
case 3390:
case 1929:
case 1506:
case 2944:
case 3401:
case 3412:
case 464:
case 3469:
case 3002:
case 3652:
case 3805:
case 3817:
case 2172:
case 3675:
case 1176:
case 2653:
case 2003:
case 420:
case 2413:
case 949:
case 1883:
case 3452:
case 2312:
case 3669:
case 4081:
case 1585:
case 3255:
case 2115:
case 638:
case 2107:
case 2369:
case 3612:
case 3601:
case 3899:
case 1254:
case 1903:
case 723:
case 1316:
case 388:
case 407:
case 3842:
case 537:
case 2551:
case 2613:
case 3906:
case 3045:
case 969:
case 2708:
case 2577:
case 2453:
case 1838:
case 2843:
case 3857:
case 912:
case 3077:
case 1839:
case 2028:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743667201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,];
var gg_b = "1743667201/";

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
