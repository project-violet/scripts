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
case 1374:
case 2749:
case 3855:
case 183:
case 3744:
case 250:
case 1057:
case 586:
case 3732:
case 553:
case 1800:
case 1188:
case 646:
case 175:
case 3559:
case 1851:
case 1395:
case 3985:
case 1093:
case 1170:
case 1392:
case 1076:
case 3840:
case 74:
case 96:
case 1310:
case 3553:
case 319:
case 866:
case 419:
case 1731:
case 2856:
case 1099:
case 927:
case 1167:
case 2638:
case 3458:
case 3763:
case 2071:
case 2021:
case 3974:
case 3677:
case 1234:
case 884:
case 3444:
case 1266:
case 80:
case 2449:
case 3381:
case 2973:
case 3:
case 1026:
case 2652:
case 2548:
case 2655:
case 1120:
case 2443:
case 1242:
case 2261:
case 3660:
case 145:
case 915:
case 2436:
case 1083:
case 3656:
case 3469:
case 77:
case 3205:
case 2464:
case 3992:
case 1382:
case 318:
case 1404:
case 933:
case 1431:
case 564:
case 3758:
case 3463:
case 1625:
case 1574:
case 242:
case 3165:
case 1622:
case 1899:
case 3591:
case 1876:
case 621:
case 4040:
case 3397:
case 964:
case 744:
case 1684:
case 3146:
case 1737:
case 3359:
case 2220:
case 522:
case 2077:
case 281:
case 1161:
case 1000:
case 3353:
case 2060:
case 2134:
case 1857:
case 2101:
case 277:
case 2166:
case 3052:
case 613:
case 3581:
case 3038:
case 2027:
case 2348:
case 4038:
case 3671:
case 396:
case 1694:
case 3387:
case 2214:
case 1585:
case 1437:
case 3219:
case 1959:
case 986:
case 792:
case 294:
case 3368:
case 953:
case 247:
case 2821:
case 1524:
case 361:
case 2312:
case 274:
case 3157:
case 1753:
case 1468:
case 1563:
case 2013:
case 2328:
case 2503:
case 3806:
case 3337:
case 2172:
case 2390:
case 3861:
case 3088:
case 4014:
case 3014:
case 772:
case 2019:
case 747:
case 967:
case 2802:
case 1532:
case 826:
case 3176:
case 3193:
case 355:
case 1487:
case 6:
case 1797:
case 4067:
case 3316:
case 292:
case 92:
case 244:
case 2606:
case 807:
case 1642:
case 297:
case 1937:
case 1634:
case 730:
case 3020:
case 3277:
case 1459:
case 742:
case 962:
case 2708:
case 2380:
case 1666:
case 777:
case 1650:
case 346:
case 2122:
case 3641:
case 3183:
case 1916:
case 781:
case 2118:
case 108:
case 3189:
case 2184:
case 3331:
case 3304:
case 2041:
case 189:
case 661:
case 1062:
case 3710:
case 2429:
case 1284:
case 1046:
case 3870:
case 3482:
case 559:
case 2423:
case 79:
case 2002:
case 3792:
case 3888:
case 2773:
case 3061:
case 2819:
case 4061:
case 3814:
case 4006:
case 841:
case 1033:
case 335:
case 1335:
case 435:
case 3006:
case 696:
case 1152:
case 2779:
case 2698:
case 2813:
case 413:
case 1791:
case 1344:
case 1481:
case 938:
case 1904:
case 1607:
case 2729:
case 810:
case 3724:
case 3782:
case 3492:
case 2580:
case 558:
case 2667:
case 1138:
case 2473:
case 3613:
case 3898:
case 1272:
case 1275:
case 871:
case 2496:
case 2578:
case 3935:
case 421:
case 195:
case 2688:
case 3474:
case 24:
case 2614:
case 3619:
case 2917:
case 1491:
case 3647:
case 939:
case 3216:
case 1956:
case 2158:
case 1829:
case 1692:
case 614:
case 773:
case 836:
case 3407:
case 3048:
case 2338:
case 1823:
case 4048:
case 1977:
case 2228:
case 1674:
case 590:
case 2900:
case 1008:
case 1525:
case 3691:
case 1886:
case 803:
case 293:
case 1518:
case 1584:
case 1960:
case 1109:
case 279:
case 1682:
case 963:
case 743:
case 3707:
case 2097:
case 1575:
case 3164:
case 1624:
case 1927:
case 1873:
case 720:
case 55:
case 3143:
case 3054:
case 3681:
case 2280:
case 2059:
case 1896:
case 799:
case 1594:
case 2891:
case 104:
case 3360:
case 2144:
case 2355:
case 3149:
case 2439:
case 3401:
case 2654:
case 2081:
case 95:
case 3321:
case 1244:
case 3466:
case 3972:
case 2433:
case 3653:
case 3445:
case 3442:
case 1235:
case 325:
case 191:
case 2538:
case 1180:
case 1325:
case 1402:
case 2446:
case 2887:
case 1405:
case 260:
case 2993:
case 1178:
case 2209:
case 2630:
case 563:
case 412:
case 1029:
case 1318:
case 2999:
case 1441:
case 934:
case 1384:
case 2091:
case 3734:
case 1112:
case 3556:
case 2853:
case 929:
case 417:
case 317:
case 10:
case 2859:
case 3745:
case 3668:
case 845:
case 1190:
case 1073:
case 3925:
case 3111:
case 2983:
case 53:
case 2897:
case 2648:
case 665:
case 3750:
case 1258:
case 3560:
case 2989:
case 2762:
case 3918:
case 1741:
case 2965:
case 937:
case 3784:
case 3494:
case 2962:
case 2499:
case 911:
case 2476:
case 2598:
case 1295:
case 3616:
case 1902:
case 3878:
case 1292:
case 2946:
case 2493:
case 3722:
case 651:
case 2933:
case 3472:
case 2612:
case 3945:
case 3880:
case 3942:
case 3934:
case 3901:
case 3637:
case 2457:
case 2628:
case 1274:
case 3966:
case 2690:
case 1350:
case 1771:
case 2816:
case 110:
case 3341:
case 2489:
case 2678:
case 3484:
case 4009:
case 2799:
case 3009:
case 3794:
case 2031:
case 2776:
case 1285:
case 3302:
case 1811:
case 2588:
case 4003:
case 3422:
case 3305:
case 3003:
case 1154:
case 2837:
case 1345:
case 3772:
case 1507:
case 2306:
case 2570:
case 557:
case 3828:
case 3775:
case 2426:
case 2361:
case 414:
case 1049:
case 940:
case 760:
case 1334:
case 2757:
case 932:
case 1421:
case 3815:
case 1366:
case 1632:
case 957:
case 1913:
case 465:
case 1635:
case 2254:
case 2398:
case 1477:
case 3259:
case 1919:
case 532:
case 748:
case 1947:
case 2451:
case 631:
case 4078:
case 3604:
case 2230:
case 3123:
case 220:
case 1669:
case 102:
case 31:
case 3268:
case 1550:
case 4015:
case 1817:
case 612:
case 4012:
case 3502:
case 3319:
case 4090:
case 3173:
case 2388:
case 778:
case 3196:
case 4028:
case 969:
case 749:
case 2506:
case 1307:
case 2751:
case 1545:
case 2248:
case 2370:
case 1011:
case 2192:
case 1864:
case 2110:
case 298:
case 1501:
case 1534:
case 1756:
case 3809:
case 2367:
case 952:
case 2016:
case 2180:
case 2808:
case 1538:
case 3461:
case 2235:
case 464:
case 364:
case 3249:
case 2244:
case 1081:
case 1654:
case 1439:
case 5:
case 3389:
case 2441:
case 2263:
case 2318:
case 2029:
case 771:
case 266:
case 4024:
case 1993:
case 3383:
case 2178:
case 3264:
case 1446:
case 4085:
case 2269:
case 1887:
case 1976:
case 1540:
case 996:
case 2375:
case 3761:
case 3137:
case 3551:
case 1733:
case 3608:
case 4074:
case 638:
case 2115:
case 2079:
case 1853:
case 284:
case 3357:
case 1555:
case 624:
case 2741:
case 3010:
case 3399:
case 2258:
case 453:
case 2394:
case 741:
case 961:
case 1552:
case 1648:
case 1765:
case 1897:
case 2705:
case 3095:
case 386:
case 3376:
case 3092:
case 2702:
case 3500:
case 707:
case 3882:
case 3211:
case 561:
case 3885:
case 1087:
case 3467:
case 830:
case 3824:
case 2829:
case 1158:
case 149:
case 842:
case 3589:
case 877:
case 2960:
case 3955:
case 919:
case 2413:
case 3673:
case 3720:
case 881:
case 1290:
case 2525:
case 3798:
case 3488:
case 46:
case 3679:
case 3629:
case 9:
case 1278:
case 2927:
case 306:
case 2624:
case 406:
case 3938:
case 3351:
case 2103:
case 3770:
case 3623:
case 62:
case 179:
case 3131:
case 872:
case 322:
case 2109:
case 148:
case 918:
case 1144:
case 204:
case 3599:
case 894:
case 28:
case 2879:
case 3874:
case 1352:
case 2747:
case 315:
case 1135:
case 1132:
case 702:
case 3300:
case 3788:
case 2947:
case 3914:
case 1400:
case 3617:
case 2477:
case 1398:
case 3988:
case 2460:
case 3181:
case 143:
case 3455:
case 3643:
case 324:
case 874:
case 653:
case 2913:
case 424:
case 2669:
case 3967:
case 120:
case 913:
case 1603:
case 199:
case 3636:
case 892:
case 2663:
case 2727:
case 3738:
case 1609:
case 1185:
case 704:
case 3970:
case 1451:
case 1037:
case 2843:
case 1388:
case 1314:
case 2777:
case 897:
case 3844:
case 173:
case 3755:
case 3562:
case 2817:
case 3565:
case 2550:
case 555:
case 3863:
case 1016:
case 439:
case 2501:
case 1804:
case 1110:
case 3869:
case 2427:
case 2658:
case 1561:
case 3740:
case 3438:
case 664:
case 2011:
case 1370:
case 3533:
case 1195:
case 1751:
case 2307:
case 1506:
case 2836:
case 784:
case 1946:
case 2292:
case 2295:
case 2902:
case 1598:
case 1499:
case 1962:
case 633:
case 4058:
case 3611:
case 2210:
case 1965:
case 1690:
case 622:
case 42:
case 2274:
case 358:
case 1457:
case 3279:
case 1628:
case 3168:
case 32:
case 458:
case 467:
case 976:
case 1615:
case 367:
case 606:
case 1612:
case 1933:
case 1793:
case 3346:
case 2036:
case 3197:
case 3223:
case 362:
case 2130:
case 2064:
case 4069:
case 2811:
case 1514:
case 1776:
case 116:
case 1004:
case 3362:
case 1678:
case 2224:
case 1489:
case 791:
case 3063:
case 3365:
case 1816:
case 627:
case 2771:
case 2350:
case 2366:
case 1680:
case 2421:
case 4044:
case 2049:
case 3044:
case 3153:
case 766:
case 946:
case 4032:
case 3032:
case 3035:
case 3333:
case 1570:
case 1306:
case 2154:
case 2507:
case 2043:
case 3478:
case 2987:
case 3689:
case 2051:
case 1330:
case 3573:
case 3948:
case 3102:
case 2876:
case 925:
case 236:
case 3894:
case 2899:
case 1056:
case 3683:
case 130:
case 2716:
case 1871:
case 328:
case 878:
case 45:
case 428:
case 849:
case 1150:
case 893:
case 3626:
case 912:
case 2857:
case 3712:
case 334:
case 1134:
case 551:
case 434:
case 669:
case 500:
case 181:
case 2592:
case 1077:
case 3480:
case 3728:
case 1145:
case 2997:
case 2883:
case 3778:
case 3825:
case 931:
case 1411:
case 3930:
case 390:
case 3693:
case 1267:
case 2416:
case 172:
case 329:
case 879:
case 2675:
case 3415:
case 3529:
case 147:
case 2953:
case 3412:
case 194:
case 2826:
case 2582:
case 3523:
case 668:
case 3954:
case 3657:
case 709:
case 3428:
case 2437:
case 1214:
case 275:
case 1743:
case 788:
case 3396:
case 1986:
case 3373:
case 101:
case 3075:
case 1530:
case 580:
case 256:
case 3119:
case 2114:
case 4075:
case 1877:
case 2981:
case 632:
case 43:
case 1717:
case 3379:
case 640:
case 1071:
case 795:
case 3094:
case 2704:
case 454:
case 2310:
case 1764:
case 2395:
case 1107:
case 2851:
case 1736:
case 1261:
case 245:
case 789:
case 463:
case 3386:
case 1655:
case 1443:
case 2120:
case 1548:
case 3233:
case 1652:
case 2026:
case 951:
case 2245:
case 1973:
case 900:
case 2266:
case 2991:
case 670:
case 2201:
case 1417:
case 1021:
case 3262:
case 3329:
case 1640:
case 2431:
case 4084:
case 3409:
case 3018:
case 3084:
case 4018:
case 525:
case 3651:
case 2089:
case 1827:
case 2382:
case 3246:
case 3323:
case 3403:
case 3022:
case 4022:
case 611:
case 1436:
case 1002:
case 514:
case 1590:
case 2222:
case 3336:
case 468:
case 2225:
case 1303:
case 368:
case 2284:
case 357:
case 3050:
case 3289:
case 2065:
case 2218:
case 745:
case 965:
case 1512:
case 3156:
case 4001:
case 2155:
case 3001:
case 629:
case 2791:
case 3034:
case 2039:
case 1813:
case 17:
case 3066:
case 1779:
case 2152:
case 4066:
case 3317:
case 3045:
case 4045:
case 4042:
case 2332:
case 3177:
case 1819:
case 3042:
case 2138:
case 1667:
case 1723:
case 1936:
case 783:
case 1729:
case 2358:
case 2294:
case 288:
case 2781:
case 65:
case 2491:
case 452:
case 14:
case 1688:
case 352:
case 1578:
case 1943:
case 2272:
case 1473:
case 805:
case 1408:
case 2569:
case 3842:
case 311:
case 1390:
case 3980:
case 3564:
case 3754:
case 3845:
case 3536:
case 1328:
case 2833:
case 1047:
case 337:
case 3866:
case 2563:
case 2753:
case 2468:
case 2839:
case 174:
case 1312:
case 820:
case 1841:
case 209:
case 3549:
case 2862:
case 470:
case 1194:
case 3850:
case 192:
case 3171:
case 3543:
case 3007:
case 2487:
case 2535:
case 4007:
case 3311:
case 2532:
case 3448:
case 3990:
case 1708:
case 2459:
case 3454:
case 2601:
case 3639:
case 2937:
case 3121:
case 323:
case 873:
case 654:
case 197:
case 423:
case 2642:
case 3912:
case 2645:
case 3633:
case 144:
case 1184:
case 3646:
case 63:
case 2916:
case 898:
case 432:
case 332:
case 1378:
case 1240:
case 2497:
case 2787:
case 2650:
case 1125:
case 1911:
case 1758:
case 1463:
case 1241:
case 2262:
case 2018:
case 118:
case 3431:
case 2265:
case 4089:
case 3404:
case 1568:
case 2651:
case 2246:
case 1469:
case 1992:
case 2323:
case 1838:
case 1656:
case 2403:
case 3083:
case 1995:
case 3242:
case 1587:
case 831:
case 2386:
case 345:
case 263:
case 445:
case 3026:
case 1:
case 757:
case 2233:
case 948:
case 817:
case 560:
case 2600:
case 1974:
case 1458:
case 1627:
case 3167:
case 812:
case 3704:
case 2709:
case 3310:
case 1553:
case 119:
case 1769:
case 1982:
case 3392:
case 3076:
case 3093:
case 2703:
case 1985:
case 3395:
case 3170:
case 3851:
case 375:
case 1735:
case 2147:
case 2396:
case 1597:
case 2075:
case 356:
case 3981:
case 1391:
case 978:
case 383:
case 4057:
case 1855:
case 3374:
case 608:
case 23:
case 689:
case 161:
case 2415:
case 2529:
case 3524:
case 1213:
case 549:
case 2490:
case 1247:
case 2780:
case 770:
case 3959:
case 2657:
case 2954:
case 1219:
case 3437:
case 2822:
case 3883:
case 1671:
case 2930:
case 593:
case 1038:
case 2825:
case 2693:
case 2818:
case 800:
case 229:
case 2626:
case 688:
case 2715:
case 1139:
case 3968:
case 3857:
case 234:
case 1055:
case 303:
case 2875:
case 2790:
case 579:
case 4000:
case 1621:
case 2480:
case 3592:
case 1133:
case 960:
case 2728:
case 3106:
case 1146:
case 4051:
case 3893:
case 3987:
case 3684:
case 695:
case 436:
case 723:
case 1040:
case 3876:
case 3899:
case 3622:
case 2141:
case 1162:
case 228:
case 25:
case 1189:
case 408:
case 308:
case 2646:
case 3916:
case 1256:
case 232:
case 3497:
case 905:
case 734:
case 2662:
case 1183:
case 3787:
case 656:
case 2748:
case 543:
case 2665:
case 3666:
case 2990:
case 599:
case 1126:
case 75:
case 916:
case 1020:
case 3459:
case 2928:
case 3634:
case 520:
case 1260:
case 3558:
case 81:
case 2633:
case 309:
case 3544:
case 585:
case 1067:
case 1316:
case 2517:
case 2543:
case 2007:
case 3797:
case 155:
case 3532:
case 176:
case 573:
case 2730:
case 729:
case 2564:
case 598:
case 211:
case 2842:
case 3569:
case 790:
case 2536:
case 1806:
case 2754:
case 2866:
case 865:
case 3468:
case 1531:
case 2801:
case 1504:
case 3839:
case 3781:
case 998:
case 1944:
case 1619:
case 2257:
case 395:
case 1935:
case 754:
case 1820:
case 636:
case 495:
case 1932:
case 2903:
case 1785:
case 269:
case 1495:
case 1963:
case 3294:
case 3358:
case 2299:
case 488:
case 3904:
case 1410:
case 973:
case 1221:
case 999:
case 2349:
case 3039:
case 516:
case 2034:
case 2160:
case 3791:
case 2001:
case 2317:
case 3152:
case 920:
case 2045:
case 4033:
case 2343:
case 2226:
case 3033:
case 2511:
case 2042:
case 1792:
case 2364:
case 1482:
case 3225:
case 1537:
case 1151:
case 1485:
case 2336:
case 268:
case 1870:
case 3046:
case 1795:
case 505:
case 2050:
case 3284:
case 257:
case 1958:
case 3363:
case 3065:
case 1710:
case 3062:
case 763:
case 489:
case 943:
case 1331:
case 233:
case 682:
case 1149:
case 2686:
case 48:
case 1117:
case 1571:
case 542:
case 738:
case 2593:
case 215:
case 2498:
case 2576:
case 1377:
case 2714:
case 2300:
case 530:
case 206:
case 3575:
case 2938:
case 151:
case 1164:
case 1030:
case 3572:
case 641:
case 1136:
case 896:
case 577:
case 3103:
case 2623:
case 3682:
case 3685:
case 581:
case 3109:
case 1356:
case 2557:
case 2131:
case 3960:
case 227:
case 2589:
case 3518:
case 3413:
case 610:
case 2673:
case 2720:
case 2414:
case 1237:
case 2679:
case 4008:
case 3977:
case 1327:
case 2882:
case 2526:
case 594:
case 671:
case 1407:
case 2470:
case 547:
case 3692:
case 3829:
case 2824:
case 2467:
case 3695:
case 501:
case 180:
case 1918:
case 1984:
case 1560:
case 3258:
case 1750:
case 1371:
case 818:
case 758:
case 1922:
case 2095:
case 3705:
case 2393:
case 3702:
case 1577:
case 1111:
case 2092:
case 2376:
case 286:
case 2500:
case 1830:
case 1925:
case 4073:
case 626:
case 3190:
case 1742:
case 3375:
case 2706:
case 2137:
case 3372:
case 2551:
case 1668:
case 1854:
case 3128:
case 30:
case 1766:
case 117:
case 4079:
case 972:
case 2608:
case 484:
case 1701:
case 1556:
case 1994:
case 3384:
case 607:
case 3263:
case 2024:
case 3971:
case 819:
case 1450:
case 4029:
case 466:
case 3178:
case 759:
case 2264:
case 3023:
case 981:
case 1848:
case 2082:
case 4023:
case 3808:
case 2326:
case 2461:
case 125:
case 3235:
case 491:
case 1527:
case 1445:
case 2406:
case 3086:
case 1321:
case 2217:
case 930:
case 1434:
case 1401:
case 487:
case 3017:
case 3366:
case 1815:
case 2339:
case 3301:
case 114:
case 2153:
case 3049:
case 3342:
case 471:
case 4043:
case 1772:
case 2346:
case 1422:
case 57:
case 1547:
case 1003:
case 2197:
case 2069:
case 3064:
case 3130:
case 4064:
case 1302:
case 3285:
case 1418:
case 410:
case 1341:
case 310:
case 3224:
case 944:
case 2229:
case 1484:
case 3771:
case 997:
case 3350:
case 1513:
case 786:
case 813:
case 2279:
case 258:
case 1901:
case 1637:
case 835:
case 267:
case 441:
case 753:
case 2906:
case 1945:
case 1472:
case 54:
case 2187:
case 1722:
case 3292:
case 1878:
case 3902:
case 1725:
case 68:
case 974:
case 604:
case 482:
case 94:
case 3566:
case 3501:
case 3864:
case 3542:
case 3011:
case 2438:
case 2740:
case 1803:
case 691:
case 3836:
case 1028:
case 1347:
case 2920:
case 2546:
case 1173:
case 1319:
case 2191:
case 3760:
case 2844:
case 1179:
case 407:
case 2752:
case 3550:
case 1268:
case 2664:
case 302:
case 684:
case 3456:
case 715:
case 3727:
case 855:
case 3663:
case 1123:
case 1297:
case 2738:
case 1907:
case 426:
case 733:
case 1604:
case 876:
case 597:
case 1078:
case 3644:
case 2649:
case 3919:
case 2914:
case 2988:
case 1259:
case 1080:
case 3477:
case 3460:
case 3635:
case 2643:
case 2181:
case 2452:
case 3913:
case 224:
case 1253:
case 2925:
case 1500:
case 186:
case 2577:
case 1092:
case 3746:
case 1095:
case 3983:
case 3897:
case 3552:
case 1116:
case 2750:
case 2687:
case 3989:
case 2984:
case 556:
case 280:
case 3555:
case 2918:
case 1010:
case 3762:
case 3739:
case 1357:
case 2701:
case 620:
case 3091:
case 3853:
case 2766:
case 3733:
case 1551:
case 3859:
case 231:
case 3540:
case 3926:
case 1082:
case 3203:
case 2848:
case 1236:
case 685:
case 460:
case 3446:
case 1085:
case 1383:
case 212:
case 673:
case 854:
case 2231:
case 3630:
case 1024:
case 545:
case 2994:
case 3462:
case 2697:
case 3999:
case 2434:
case 1217:
case 4081:
case 3439:
case 3957:
case 83:
case 3081:
case 3654:
case 3868:
case 698:
case 3433:
case 1406:
case 2445:
case 2527:
case 2442:
case 2975:
case 1300:
case 2377:
case 1498:
case 1576:
case 115:
case 1593:
case 3280:
case 2681:
case 1420:
case 2571:
case 3352:
case 2360:
case 1686:
case 3144:
case 3053:
case 1104:
case 122:
case 479:
case 1557:
case 1131:
case 2356:
case 448:
case 379:
case 1767:
case 1895:
case 3097:
case 3278:
case 1629:
case 3340:
case 106:
case 1488:
case 1679:
case 3228:
case 2237:
case 1414:
case 3900:
case 1720:
case 1583:
case 1673:
case 834:
case 3212:
case 1955:
case 4068:
case 3068:
case 493:
case 1696:
case 828:
case 378:
case 85:
case 3158:
case 2521:
case 1824:
case 1467:
case 1470:
case 3087:
case 975:
case 1885:
case 1526:
case 1940:
case 2048:
case 3338:
case 605:
case 3506:
case 2803:
case 1533:
case 3192:
case 1869:
case 3561:
case 139:
case 398:
case 3110:
case 4016:
case 840:
case 3016:
case 1863:
case 2268:
case 2313:
case 3174:
case 2179:
case 1565:
case 373:
case 823:
case 2541:
case 1562:
case 2012:
case 473:
case 1191:
case 2319:
case 3314:
case 1998:
case 509:
case 1208:
case 485:
case 2196:
case 2505:
case 4037:
case 385:
case 2078:
case 3451:
case 1970:
case 3230:
case 2631:
case 2123:
case 2297:
case 3182:
case 1636:
case 2129:
case 3124:
case 870:
case 320:
case 1664:
case 420:
case 751:
case 2253:
case 1181:
case 1643:
case 1455:
case 343:
case 443:
case 265:
case 508:
case 1988:
case 3398:
case 1649:
case 3320:
case 2186:
case 1159:
case 405:
case 3837:
case 3570:
case 712:
case 1286:
case 3426:
case 908:
case 1153:
case 159:
case 852:
case 214:
case 2281:
case 3680:
case 2815:
case 3567:
case 725:
case 3816:
case 1365:
case 3678:
case 2794:
case 3031:
case 2009:
case 3799:
case 3776:
case 869:
case 2519:
case 2425:
case 162:
case 3588:
case 1069:
case 3483:
case 1223:
case 2547:
case 3793:
case 2305:
case 2422:
case 3933:
case 1273:
case 1906:
case 780:
case 2108:
case 3615:
case 1961:
case 3726:
case 3939:
case 2637:
case 1168:
case 2901:
case 3628:
case 648:
case 2291:
case 3690:
case 3965:
case 2950:
case 1058:
case 2784:
case 3499:
case 2494:
case 3962:
case 3476:
case 2616:
case 3946:
case 1187:
case 3493:
case 1954:
case 1657:
case 1780:
case 1490:
case 815:
case 2368:
case 2213:
case 494:
case 1412:
case 347:
case 1415:
case 1529:
case 447:
case 261:
case 1676:
case 129:
case 1818:
case 67:
case 190:
case 1693:
case 1825:
case 1930:
case 296:
case 1699:
case 3145:
case 1872:
case 2133:
case 1480:
case 3077:
case 481:
case 3220:
case 2621:
case 1790:
case 4077:
case 3908:
case 381:
case 4060:
case 3101:
case 134:
case 3060:
case 3134:
case 1712:
case 1715:
case 377:
case 746:
case 2052:
case 477:
case 3150:
case 442:
case 1579:
case 2165:
case 3871:
case 128:
case 2162:
case 1894:
case 430:
case 3056:
case 3711:
case 504:
case 3330:
case 1573:
case 1105:
case 2146:
case 3436:
case 2202:
case 2995:
case 886:
case 1323:
case 1025:
case 1508:
case 2992:
case 3827:
case 2469:
case 1084:
case 2568:
case 1651:
case 735:
case 1265:
case 591:
case 1018:
case 1409:
case 1329:
case 3640:
case 2758:
case 2463:
case 98:
case 2677:
case 3021:
case 49:
case 4021:
case 3449:
case 2381:
case 692:
case 3206:
case 2432:
case 3973:
case 3548:
case 3652:
case 2:
case 3443:
case 163:
case 1386:
case 3996:
case 3107:
case 2559:
case 50:
case 584:
case 2840:
case 219:
case 721:
case 3856:
case 1709:
case 154:
case 1094:
case 644:
case 2924:
case 3929:
case 2458:
case 3717:
case 2855:
case 3749:
case 2391:
case 3860:
case 3877:
case 2732:
case 401:
case 1373:
case 864:
case 1072:
case 3743:
case 2735:
case 1147:
case 3473:
case 2898:
case 2613:
case 3943:
case 719:
case 2820:
case 3578:
case 3496:
case 3688:
case 2474:
case 152:
case 3917:
case 2619:
case 3614:
case 2944:
case 2647:
case 642:
case 2410:
case 1299:
case 2724:
case 2963:
case 2495:
case 3936:
case 169:
case 681:
case 2785:
case 2969:
case 3667:
case 2492:
case 2061:
case 510:
case 1042:
case 2814:
case 3819:
case 235:
case 3847:
case 3486:
case 718:
case 867:
case 2006:
case 1343:
case 3779:
case 858:
case 1317:
case 1066:
case 902:
case 3698:
case 1034:
case 1349:
case 213:
case 2221:
case 3620:
case 4041:
case 647:
case 157:
case 2424:
case 2867:
case 3005:
case 3303:
case 587:
case 2870:
case 2485:
case 1336:
case 1807:
case 2151:
case 2537:
case 2482:
case 4002:
case 2792:
case 1283:
case 3911:
case 971:
case 3125:
case 1251:
case 601:
case 2641:
case 3240:
case 650:
case 132:
case 2602:
case 839:
case 1646:
case 910:
case 344:
case 1633:
case 526:
case 3255:
case 1121:
case 497:
case 1928:
case 2277:
case 1454:
case 2020:
case 2126:
case 3380:
case 1448:
case 941:
case 761:
case 507:
case 2070:
case 3805:
case 1978:
case 255:
case 3238:
case 492:
case 1517:
case 392:
case 69:
case 170:
case 1549:
case 3509:
case 2531:
case 1801:
case 374:
case 982:
case 1866:
case 3315:
case 3503:
case 2337:
case 1754:
case 1536:
case 111:
case 3390:
case 4019:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1773327601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,];
var gg_b = "1773327601/";

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
