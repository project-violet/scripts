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
case 3680:
case 1975:
case 198:
case 156:
case 3200:
case 1360:
case 66:
case 479:
case 2124:
case 2381:
case 1484:
case 581:
case 3308:
case 850:
case 3135:
case 98:
case 1268:
case 675:
case 3715:
case 3407:
case 3503:
case 553:
case 7:
case 2743:
case 3295:
case 3721:
case 2083:
case 89:
case 3809:
case 1056:
case 3991:
case 626:
case 1758:
case 1271:
case 110:
case 3434:
case 763:
case 1406:
case 1185:
case 2922:
case 2789:
case 3361:
case 2425:
case 4040:
case 3879:
case 1152:
case 1720:
case 1630:
case 2216:
case 857:
case 3378:
case 3894:
case 3344:
case 1423:
case 1527:
case 1990:
case 3477:
case 369:
case 1402:
case 2591:
case 1905:
case 3063:
case 2183:
case 799:
case 2212:
case 3828:
case 1156:
case 3057:
case 956:
case 998:
case 1754:
case 1241:
case 1332:
case 3921:
case 2277:
case 3969:
case 1446:
case 2470:
case 907:
case 301:
case 178:
case 3596:
case 3412:
case 18:
case 2366:
case 463:
case 865:
case 3304:
case 1264:
case 1442:
case 2618:
case 1945:
case 3791:
case 910:
case 373:
case 917:
case 311:
case 3824:
case 2079:
case 631:
case 1597:
case 1493:
case 3898:
case 1539:
case 3374:
case 854:
case 2632:
case 1865:
case 3447:
case 2703:
case 2459:
case 1819:
case 2400:
case 779:
case 721:
case 1833:
case 2992:
case 1705:
case 3399:
case 2109:
case 1513:
case 900:
case 3849:
case 1790:
case 2726:
case 2636:
case 4:
case 1666:
case 2094:
case 3337:
case 2687:
case 3438:
case 2495:
case 3831:
case 3712:
case 1475:
case 1082:
case 512:
case 195:
case 561:
case 3525:
case 2534:
case 975:
case 68:
case 1746:
case 678:
case 2814:
case 1454:
case 2351:
case 1972:
case 604:
case 2940:
case 3491:
case 1104:
case 2067:
case 3609:
case 2577:
case 2473:
case 4022:
case 1976:
case 1541:
case 1788:
case 442:
case 926:
case 2403:
case 2507:
case 1155:
case 1830:
case 131:
case 1510:
case 2422:
case 1906:
case 1793:
case 2925:
case 1881:
case 1148:
case 343:
case 3032:
case 3243:
case 824:
case 3977:
case 1490:
case 2426:
case 1239:
case 614:
case 1186:
case 334:
case 1717:
case 1004:
case 1137:
case 3540:
case 3036:
case 2167:
case 3694:
case 2547:
case 16:
case 3421:
case 3415:
case 3160:
case 2080:
case 3014:
case 3226:
case 698:
case 4092:
case 175:
case 2319:
case 607:
case 3912:
case 3595:
case 3683:
case 4089:
case 523:
case 1988:
case 1568:
case 820:
case 519:
case 3853:
case 1445:
case 330:
case 1044:
case 3867:
case 126:
case 3500:
case 885:
case 931:
case 337:
case 3385:
case 1619:
case 2131:
case 2496:
case 1420:
case 1665:
case 2725:
case 3570:
case 3734:
case 2959:
case 2180:
case 3114:
case 1227:
case 3947:
case 827:
case 600:
case 2887:
case 209:
case 1866:
case 2836:
case 1178:
case 4043:
case 1702:
case 3356:
case 1633:
case 3938:
case 2663:
case 174:
case 1230:
case 3317:
case 3418:
case 2126:
case 1190:
case 2368:
case 644:
case 1813:
case 1105:
case 3091:
case 994:
case 1437:
case 2563:
case 719:
case 1601:
case 2815:
case 3393:
case 3843:
case 2612:
case 2122:
case 884:
case 1565:
case 1985:
case 197:
case 2750:
case 3670:
case 2535:
case 839:
case 108:
case 329:
case 1897:
case 3524:
case 313:
case 1952:
case 633:
case 3487:
case 3963:
case 2728:
case 3342:
case 2638:
case 3695:
case 1005:
case 1668:
case 3892:
case 1404:
case 3957:
case 3191:
case 3388:
case 858:
case 81:
case 709:
case 461:
case 1316:
case 3280:
case 190:
case 412:
case 2779:
case 3896:
case 1175:
case 15:
case 2647:
case 3659:
case 2924:
case 3935:
case 2022:
case 242:
case 986:
case 1154:
case 1377:
case 3302:
case 1045:
case 832:
case 2341:
case 2909:
case 2891:
case 1262:
case 3873:
case 43:
case 1827:
case 3594:
case 194:
case 1058:
case 1461:
case 2364:
case 1120:
case 1334:
case 3306:
case 2431:
case 647:
case 3579:
case 1752:
case 409:
case 1610:
case 997:
case 1429:
case 2950:
case 177:
case 2189:
case 3015:
case 908:
case 3414:
case 549:
case 640:
case 4031:
case 2677:
case 876:
case 2928:
case 990:
case 1641:
case 2143:
case 335:
case 702:
case 3803:
case 583:
case 880:
case 3550:
case 2724:
case 2634:
case 3372:
case 1020:
case 1307:
case 3267:
case 186:
case 2979:
case 423:
case 2310:
case 1801:
case 1123:
case 1102:
case 3177:
case 2536:
case 1778:
case 2953:
case 1566:
case 694:
case 1986:
case 1251:
case 2967:
case 2587:
case 944:
case 3294:
case 352:
case 1955:
case 1072:
case 3320:
case 1697:
case 933:
case 1639:
case 1982:
case 2669:
case 1974:
case 4049:
case 2731:
case 2812:
case 1452:
case 2621:
case 2615:
case 2140:
case 453:
case 855:
case 3463:
case 3567:
case 3800:
case 3936:
case 481:
case 221:
case 3553:
case 3457:
case 1904:
case 2518:
case 1023:
case 521:
case 3345:
case 3692:
case 140:
case 3077:
case 3895:
case 1002:
case 1176:
case 2025:
case 966:
case 2339:
case 1708:
case 3932:
case 3689:
case 2424:
case 1321:
case 3435:
case 2498:
case 3760:
case 1006:
case 2847:
case 2100:
case 2767:
case 867:
case 1627:
case 3840:
case 1737:
case 3224:
case 1978:
case 3016:
case 674:
case 1786:
case 359:
case 4079:
case 1944:
case 2235:
case 1088:
case 2691:
case 1265:
case 3305:
case 2195:
case 1219:
case 697:
case 1961:
case 1581:
case 1782:
case 1929:
case 753:
case 5:
case 4094:
case 133:
case 2450:
case 1530:
case 905:
case 608:
case 2159:
case 2807:
case 1841:
case 1188:
case 1391:
case 3038:
case 1142:
case 690:
case 940:
case 263:
case 3580:
case 166:
case 1146:
case 915:
case 338:
case 2059:
case 3375:
case 3732:
case 2170:
case 4009:
case 2479:
case 3112:
case 3283:
case 3836:
case 491:
case 1804:
case 160:
case 3492:
case 1275:
case 309:
case 3887:
case 1741:
case 2938:
case 3995:
case 866:
case 4021:
case 4015:
case 1383:
case 1542:
case 3832:
case 3711:
case 2570:
case 2698:
case 1081:
case 3635:
case 3725:
case 2385:
case 582:
case 3496:
case 3512:
case 3131:
case 282:
case 2114:
case 537:
case 3180:
case 422:
case 2947:
case 1030:
case 955:
case 1764:
case 1546:
case 658:
case 696:
case 2734:
case 2060:
case 3818:
case 3333:
case 2683:
case 833:
case 435:
case 1899:
case 1901:
case 1656:
case 964:
case 2867:
case 323:
case 1837:
case 639:
case 2853:
case 1886:
case 1439:
case 2469:
case 2421:
case 3547:
case 1130:
case 2707:
case 2415:
case 2559:
case 729:
case 1848:
case 1181:
case 3365:
case 771:
case 3970:
case 1685:
case 167:
case 1497:
case 2977:
case 2118:
case 3269:
case 3426:
case 928:
case 3215:
case 3221:
case 1576:
case 2628:
case 2694:
case 3167:
case 429:
case 289:
case 234:
case 676:
case 2934:
case 302:
case 840:
case 1771:
case 1572:
case 3759:
case 3403:
case 2679:
case 1062:
case 2032:
case 1394:
case 403:
case 2136:
case 1166:
case 1844:
case 164:
case 3940:
case 2018:
case 847:
case 1523:
case 1427:
case 2609:
case 1328:
case 3577:
case 1502:
case 2289:
case 2525:
case 1162:
case 3770:
case 2650:
case 2132:
case 791:
case 1861:
case 2292:
case 632:
case 3351:
case 2907:
case 361:
case 967:
case 3534:
case 1506:
case 441:
case 3109:
case 1545:
case 886:
case 2849:
case 3028:
case 4012:
case 3863:
case 3400:
case 3992:
case 2438:
case 1353:
case 180:
case 3207:
case 2386:
case 1468:
case 1272:
case 3636:
case 1604:
case 1558:
case 211:
case 4016:
case 459:
case 3996:
case 2240:
case 273:
case 262:
case 2382:
case 3521:
case 1276:
case 3459:
case 562:
case 2374:
case 511:
case 870:
case 2898:
case 3632:
case 3989:
case 3773:
case 664:
case 1206:
case 2653:
case 3366:
case 3194:
case 2667:
case 2416:
case 2592:
case 1856:
case 984:
case 939:
case 3128:
case 3618:
case 1913:
case 2791:
case 1202:
case 1885:
case 2589:
case 752:
case 1939:
case 90:
case 2915:
case 1223:
case 501:
case 1655:
case 1852:
case 1520:
case 1997:
case 1151:
case 3470:
case 3926:
case 4007:
case 660:
case 628:
case 269:
case 925:
case 2477:
case 1441:
case 2828:
case 3212:
case 980:
case 3792:
case 3591:
case 1033:
case 85:
case 2063:
case 818:
case 1242:
case 890:
case 1019:
case 1464:
case 3789:
case 1608:
case 593:
case 976:
case 3903:
case 738:
case 1554:
case 3098:
case 2035:
case 158:
case 3796:
case 11:
case 1575:
case 3216:
case 3660:
case 3024:
case 3425:
case 3411:
case 1380:
case 1713:
case 3440:
case 808:
case 2163:
case 2259:
case 4034:
case 3973:
case 1644:
case 1590:
case 2526:
case 10:
case 3330:
case 3124:
case 381:
case 1217:
case 353:
case 2503:
case 2715:
case 2295:
case 3743:
case 2522:
case 874:
case 3198:
case 1629:
case 1739:
case 2047:
case 2375:
case 1806:
case 3059:
case 3834:
case 363:
case 2960:
case 372:
case 1071:
case 1981:
case 1256:
case 2603:
case 924:
case 2112:
case 657:
case 2811:
case 2732:
case 1451:
case 538:
case 793:
case 1762:
case 1529:
case 3095:
case 3494:
case 1101:
case 401:
case 3428:
case 1544:
case 3000:
case 3327:
case 399:
case 2736:
case 1690:
case 185:
case 3257:
case 826:
case 2012:
case 1303:
case 3931:
case 1322:
case 1654:
case 1675:
case 168:
case 2147:
case 3980:
case 3807:
case 3560:
case 3159:
case 1171:
case 1884:
case 69:
case 3:
case 616:
case 650:
case 411:
case 3753:
case 2673:
case 259:
case 1326:
case 2390:
case 3767:
case 473:
case 2138:
case 3195:
case 1876:
case 3691:
case 1001:
case 2718:
case 559:
case 1893:
case 1962:
case 2209:
case 773:
case 1343:
case 1548:
case 2859:
case 1555:
case 2034:
case 2760:
case 2107:
case 1730:
case 124:
case 1064:
case 1465:
case 3498:
case 2435:
case 654:
case 1586:
case 2553:
case 1817:
case 2358:
case 3140:
case 2800:
case 2692:
case 2345:
case 1599:
case 2895:
case 2077:
case 2250:
case 2007:
case 1396:
case 469:
case 688:
case 67:
case 2228:
case 2643:
case 920:
case 552:
case 3125:
case 3669:
case 3111:
case 3532:
case 2177:
case 1392:
case 1645:
case 1888:
case 3967:
case 2279:
case 493:
case 895:
case 1504:
case 3953:
case 1139:
case 2625:
case 2169:
case 2822:
case 3218:
case 814:
case 2550:
case 3143:
case 3089:
case 2115:
case 1719:
case 2803:
case 3979:
case 2267:
case 535:
case 1237:
case 957:
case 3634:
case 3724:
case 1197:
case 1286:
case 624:
case 2372:
case 3096:
case 4014:
case 2826:
case 1340:
case 154:
case 3994:
case 1274:
case 3928:
case 1248:
case 1733:
case 734:
case 1623:
case 2757:
case 1805:
case 2376:
case 3092:
case 3749:
case 3236:
case 1204:
case 291:
case 3607:
case 3364:
case 1672:
case 3196:
case 2579:
case 3431:
case 2306:
case 1875:
case 3287:
case 99:
case 1039:
case 916:
case 2069:
case 804:
case 3189:
case 3043:
case 165:
case 591:
case 878:
case 3232:
case 88:
case 2323:
case 3909:
case 3192:
case 1013:
case 522:
case 2528:
case 222:
case 2640:
case 4060:
case 3924:
case 203:
case 1278:
case 2432:
case 1751:
case 106:
case 1552:
case 2659:
case 2346:
case 4018:
case 1919:
case 2935:
case 3998:
case 782:
case 157:
case 1585:
case 2436:
case 2191:
case 1229:
case 2957:
case 1466:
case 2388:
case 2695:
case 2231:
case 3638:
case 2963:
case 2487:
case 1933:
case 1556:
case 1261:
case 2600:
case 817:
case 1617:
case 529:
case 3869:
case 3535:
case 810:
case 2598:
case 571:
case 97:
case 3815:
case 3821:
case 4036:
case 213:
case 116:
case 19:
case 3371:
case 4087:
case 1359:
case 489:
case 271:
case 807:
case 1027:
case 3616:
case 3260:
case 2317:
case 3073:
case 845:
case 4032:
case 3983:
case 3467:
case 1845:
case 898:
case 856:
case 2549:
case 3368:
case 1395:
case 1642:
case 3453:
case 3557:
case 1492:
case 3275:
case 109:
case 2144:
case 2178:
case 3804:
case 2702:
case 477:
case 3383:
case 790:
case 1657:
case 3542:
case 838:
case 3741:
case 3588:
case 3968:
case 3254:
case 1663:
case 2501:
case 2619:
case 1131:
case 1512:
case 1832:
case 1711:
case 75:
case 902:
case 2129:
case 3030:
case 2706:
case 2227:
case 1959:
case 526:
case 3901:
case 2988:
case 2942:
case 1818:
case 2458:
case 1333:
case 3413:
case 4020:
case 486:
case 226:
case 3837:
case 841:
case 26:
case 1443:
case 3130:
case 3855:
case 470:
case 681:
case 2772:
case 3439:
case 653:
case 2571:
case 1080:
case 2784:
case 3710:
case 2946:
case 2061:
case 1319:
case 3497:
case 708:
case 912:
case 859:
case 2335:
case 1365:
case 2029:
case 3576:
case 1221:
case 3309:
case 1795:
case 1269:
case 2902:
case 1426:
case 4054:
case 2186:
case 2297:
case 2717:
case 2137:
case 3066:
case 3572:
case 2155:
case 1403:
case 1507:
case 231:
case 2651:
case 1422:
case 3258:
case 2510:
case 3584:
case 102:
case 2906:
case 2793:
case 786:
case 2182:
case 1925:
case 355:
case 2213:
case 3808:
case 346:
case 2174:
case 45:
case 3166:
case 1067:
case 3844:
case 919:
case 1577:
case 1473:
case 923:
case 3427:
case 2788:
case 2541:
case 3861:
case 2082:
case 2048:
case 3829:
case 1770:
case 595:
case 161:
case 3379:
case 2984:
case 777:
case 548:
case 1351:
case 2972:
case 1814:
case 1400:
case 514:
case 1992:
case 2318:
case 2833:
case 325:
case 2417:
case 2705:
case 1636:
case 740:
case 2210:
case 1094:
case 3558:
case 835:
case 1495:
case 214:
case 3353:
case 3272:
case 3051:
case 2920:
case 715:
case 2493:
case 4088:
case 1835:
case 2539:
case 444:
case 1703:
case 3727:
case 1366:
case 466:
case 2336:
case 3401:
case 1773:
case 3686:
case 1234:
case 2387:
case 2945:
case 504:
case 891:
case 3856:
case 3699:
case 4093:
case 2241:
case 2332:
case 2754:
case 1050:
case 3674:
case 58:
case 1362:
case 2446:
case 3202:
case 1277:
case 3939:
case 3997:
case 3151:
case 4017:
case 661:
case 3655:
case 28:
case 2775:
case 278:
case 42:
case 3520:
case 4084:
case 3441:
case 1926:
case 2402:
case 447:
case 1591:
case 2905:
case 500:
case 72:
case 1049:
case 1792:
case 405:
case 803:
case 2156:
case 3554:
case 3288:
case 3331:
case 217:
case 2185:
case 1789:
case 1425:
case 1411:
case 2851:
case 3380:
case 2314:
case 358:
case 2630:
case 3575:
case 1796:
case 2152:
case 1216:
case 510:
case 871:
case 1083:
case 1149:
case 813:
case 3505:
case 3713:
case 1973:
case 3590:
case 3678:
case 339:
case 2476:
case 153:
case 507:
case 256:
case 2975:
case 30:
case 3797:
case 3217:
case 181:
case 245:
case 1330:
case 3410:
case 3165:
case 3739:
case 1198:
case 3629:
case 545:
case 2954:
case 440:
case 3119:
case 2472:
case 1743:
case 4002:
case 556:
case 207:
case 172:
case 1514:
case 163:
case 717:
case 2146:
case 1059:
case 3451:
case 642:
case 3256:
case 3981:
case 992:
case 566:
case 2188:
case 700:
case 3285:
case 3802:
case 1095:
case 327:
case 1877:
case 921:
case 3605:
case 882:
case 199:
case 1000:
case 1327:
case 3544:
case 3766:
case 2704:
case 3690:
case 2017:
case 3252:
case 48:
case 2774:
case 0:
case 830:
case 1931:
case 2581:
case 3322:
case 745:
case 1070:
case 1257:
case 2782:
case 2929:
case 533:
case 3303:
case 798:
case 756:
case 2193:
case 3171:
case 136:
case 1:
case 233:
case 1450:
case 707:
case 3675:
case 2530:
case 1807:
case 1159:
case 3326:
case 1100:
case 2627:
case 2737:
case 1753:
case 710:
case 1235:
case 2088:
case 1691:
case 2265:
case 244:
case 3876:
case 2799:
case 3168:
case 834:
case 3548:
case 1011:
case 1339:
case 2708:
case 889:
case 3574:
case 963:
case 972:
case 2315:
case 3582:
case 3962:
case 2321:
case 215:
case 2184:
case 3110:
case 515:
case 1498:
case 2871:
case 2006:
case 651:
case 3419:
case 1397:
case 192:
case 324:
case 3730:
case 3537:
case 540:
case 3433:
case 456:
case 498:
case 3966:
case 2904:
case 843:
case 714:
case 1518:
case 3041:
case 2023:
case 999:
case 240:
case 2868:
case 2002:
case 649:
case 407:
case 2176:
case 4085:
case 3010:
case 1780:
case 400:
case 3396:
case 3164:
case 2697:
case 247:
case 2982:
case 2729:
case 778:
case 936:
case 78:
case 1669:
case 1812:
case 1731:
case 2974:
case 1615:
case 2761:
case 2801:
case 2999:
case 2123:
case 2613:
case 2102:
case 1536:
case 2778:
case 2566:
case 2986:
case 2251:
case 1967:
case 1587:
case 1816:
case 2456:
case 1143:
case 3430:
case 3299:
case 3719:
case 3139:
case 3765:
case 1218:
case 731:
case 3606:
case 692:
case 1724:
case 2664:
case 2307:
case 3197:
case 1096:
case 3286:
case 3951:
case 4044:
case 2408:
case 1979:
case 426:
case 286:
case 183:
case 3237:
case 1310:
case 4078:
case 3481:
case 679:
case 46:
case 354:
case 270:
case 3340:
case 2158:
case 3113:
case 3805:
case 873:
case 475:
case 3282:
case 1749:
case 1677:
case 3274:
case 1928:
case 570:
case 3733:
case 37:
case 3875:
case 1431:
case 1196:
case 1287:
case 388:
case 3684:
case 2266:
case 2551:
case 1236:
case 2785:
case 1189:
case 1950:
case 277:
case 365:
case 3039:
case 3311:
case 3854:
case 1192:
case 1783:
case 594:
case 2045:
case 1341:
case 2444:
case 1891:
case 2262:
case 2478:
case 2827:
case 4086:
case 1647:
case 3820:
case 3552:
case 1779:
case 2175:
case 25:
case 1924:
case 3278:
case 672:
case 3462:
case 663:
case 3751:
case 3244:
case 1998:
case 1003:
case 3693:
case 3965:
case 869:
case 518:
case 142:
case 3919:
case 1728:
case 1638:
case 3933:
case 590:
case 2668:
case 2005:
case 3556:
case 3229:
case 3466:
case 4074:
case 949:
case 4055:
case 2316:
case 1173:
case 1794:
case 1026:
case 3127:
case 2090:
case 290:
case 1815:
case 1821:
case 1612:
case 1750:
case 76:
case 1535:
case 3646:
case 2075:
case 208:
case 636:
case 775:
case 316:
case 2952:
case 274:
case 2499:
case 431:
case 3858:
case 1126:
case 726:
case 1368:
case 2486:
case 3845:
case 1709:
case 3395:
case 2813:
case 1557:
case 2437:
case 3688:
case 2956:
case 3208:
case 1467:
case 574:
case 1983:
case 1563:
case 2797:
case 345:
case 2217:
case 1680:
case 785:
case 3975:
case 398:
case 356:
case 2661:
case 3472:
case 2119:
case 1503:
case 1631:
case 1295:
case 1522:
case 3484:
case 1135:
case 2629:
case 2739:
case 2505:
case 1991:
case 3056:
case 1809:
case 1163:
case 2927:
case 1259:
case 3476:
case 2644:
case 3758:
case 3271:
case 1526:
case 1434:
case 3185:
case 2464:
case 911:
case 962:
case 973:
case 51:
case 2065:
case 2288:
case 2554:
case 3152:
case 1879:
case 2575:
case 296:
case 3630:
case 3720:
case 682:
case 2380:
case 3851:
case 842:
case 3990:
case 300:
case 169:
case 1378:
case 727:
case 1894:
case 1344:
case 2441:
case 44:
case 1828:
case 3156:
case 1057:
case 1270:
case 532:
case 287:
case 2202:
case 1969:
case 2939:
case 2682:
case 2223:
case 3332:
case 3241:
case 2648:
case 2655:
case 2520:
case 378:
case 38:
case 3775:
case 2852:
case 1596:
case 74:
case 587:
case 2997:
case 232:
case 3958:
case 3264:
case 3387:
case 2206:
case 3442:
case 3488:
case 2637:
case 2727:
case 4071:
case 1667:
case 3336:
case 1416:
case 1592:
case 2699:
case 1883:
case 1225:
case 1791:
case 3597:
case 3920:
case 276:
case 849:
case 2051:
case 173:
case 1543:
case 3539:
case 3662:
case 1374:
case 724:
case 3865:
case 1348:
case 485:
case 969:
case 225:
case 2545:
case 580:
case 3833:
case 3318:
case 314:
case 1438:
case 689:
case 420:
case 634:
case 2272:
case 2468:
case 3790:
case 2367:
case 2604:
case 1337:
case 1525:
case 2829:
case 3048:
case 1511:
case 1132:
case 77:
case 788:
case 1831:
case 1292:
case 1907:
case 765:
case 3972:
case 601:
case 2379:
case 3564:
case 2910:
case 1136:
case 1491:
case 2878:
case 2394:
case 2166:
case 406:
case 2220:
case 264:
case 1716:
case 1018:
case 3976:
case 3788:
case 2523:
case 3742:
case 2502:
case 3099:
case 1289:
case 3651:
case 673:
case 662:
case 2771:
case 555:
case 1934:
case 450:
case 611:
case 3155:
case 2572:
case 331:
case 546:
case 1747:
case 3830:
case 2062:
case 3148:
case 3881:
case 821:
case 2350:
case 3174:
case 982:
case 246:
case 1032:
case 879:
case 2245:
case 3793:
case 255:
case 3182:
case 1118:
case 1977:
case 3490:
case 2768:
case 1243:
case 2309:
case 1738:
case 3199:
case 3137:
case 3004:
case 1036:
case 2066:
case 49:
case 3717:
case 134:
case 567:
case 3784:
case 2130:
case 454:
case 36:
case 3772:
case 1559:
case 2855:
case 3108:
case 2848:
case 3029:
case 2882:
case 2205:
case 267:
case 716:
case 79:
case 3942:
case 750:
case 3363:
case 3776:
case 1595:
case 3988:
case 3568:
case 2656:
case 2349:
case 836:
case 1867:
case 326:
case 3078:
case 2413:
case 2517:
case 1853:
case 2886:
case 130:
case 3665:
case 3008:
case 3129:
case 1570:
case 137:
case 3161:
case 706:
case 182:
case 3227:
case 1114:
case 1947:
case 943:
case 2546:
case 1734:
case 1060:
case 2971:
case 3706:
case 693:
case 3866:
case 3144:
case 2804:
case 47:
case 488:
case 3633:
case 3723:
case 2588:
case 2968:
case 1938:
case 3501:
case 934:
case 1777:
case 1356:
case 1649:
case 863:
case 2542:
case 872:
case 989:
case 2383:
case 1418:
case 2858:
case 2027:
case 3230:
case 881:
case 3437:
case 4062:
case 3533:
case 922:
case 446:
case 1549:
case 2395:
case 2642:
case 3105:
case 853:
case 455:
case 3985:
case 3565:
case 397:
case 3839:
case 641:
case 516:
case 1843:
case 59:
case 29:
case 3952:
case 3474:
case 4066:
case 129:
case 2646:
case 2359:
case 3482:
case 760:
case 3404:
case 1191:
case 2466:
case 1388:
case 1963:
case 1583:
case 1342:
case 1892:
case 1600:
case 1280:
case 390:
case 3090:
case 2127:
case 3316:
case 3671:
case 103:
case 2244:
case 1896:
case 2552:
case 464:
case 318:
case 935:
case 2370:
case 2585:
case 1889:
case 506:
case 1323:
case 3444:
case 3478:
case 2013:
case 3377:
case 2676:
case 122:
case 394:
case 3058:
case 1873:
case 3610:
case 565:
case 652:
case 3429:
case 2672:
case 288:
case 2097:
case 3120:
case 1579:
case 2875:
case 27:
case 2311:
case 2039:
case 1069:
case 57:
case 2325:
case 913:
case 588:
case 929:
case 265:
case 2890:
case 3158:
case 2623:
case 3641:
case 2805:
case 2113:
case 467:
case 1735:
case 1550:
case 1822:
case 2765:
case 2299:
case 2430:
case 1115:
case 1267:
case 3408:
case 2481:
case 2237:
case 1253:
case 2606:
case 2951:
case 1372:
case 2197:
case 746:
case 3020:
case 3664:
case 959:
case 4019:
case 2842:
case 812:
case 2392:
case 1918:
case 1177:
case 4065:
case 3801:
case 2888:
case 3123:
case 1279:
case 3456:
case 622:
case 3744:
case 3566:
case 3251:
case 3106:
case 1320:
case 2164:
case 941:
case 2846:
case 2010:
case 1294:
case 787:
case 1714:
case 3955:
case 732:
case 3974:
case 1228:
case 24:
case 3948:
case 3761:
case 2389:
case 305:
case 4033:
case 3562:
case 3639:
case 40:
case 2586:
case 2966:
case 3904:
case 1457:
case 2817:
case 2433:
case 1358:
case 3176:
case 2599:
case 3002:
case 780:
case 2041:
case 1689:
case 776:
case 2343:
case 3321:
case 2582:
case 1209:
case 2781:
case 2548:
case 524:
case 2574:
case 1859:
case 2419:
case 2555:
case 484:
case 2110:
case 2465:
case 3871:
case 3786:
case 3944:
case 1673:
case 159:
case 2326:
case 3737:
case 1840:
case 1138:
case 2876:
case 3799:
case 344:
case 2168:
case 739:
case 784:
case 1718:
case 3265:
case 3782:
case 3929:
case 141:
case 1012:
case 1249:
case 2508:
case 568:
case 952:
case 2654:
case 3233:
case 520:
case 2322:
case 3748:
case 1147:
case 3530:
case 2872:
case 333:
case 3810:
case 227:
case 487:
case 2605:
case 3142:
case 2823:
case 83:
case 3188:
case 3841:
case 1116:
case 2373:
case 2766:
case 432:
case 2544:
case 3704:
case 2578:
case 3146:
case 603:
case 2071:
case 1580:
case 2256:
case 2981:
case 2561:
case 1283:
case 796:
case 1732:
case 809:
case 1622:
case 71:
case 2529:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756105201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,];
var gg_b = "1756105201/";

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
