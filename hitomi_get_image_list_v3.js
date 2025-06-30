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
case 2301:
case 2224:
case 1142:
case 3725:
case 2866:
case 1964:
case 2041:
case 79:
case 4036:
case 1917:
case 3257:
case 2988:
case 3181:
case 1644:
case 1156:
case 640:
case 2158:
case 1422:
case 269:
case 1571:
case 2032:
case 584:
case 1071:
case 3936:
case 3601:
case 3018:
case 67:
case 2807:
case 2461:
case 1085:
case 11:
case 1912:
case 2993:
case 1679:
case 605:
case 3278:
case 1147:
case 3535:
case 987:
case 2537:
case 1889:
case 1270:
case 818:
case 473:
case 895:
case 2037:
case 3013:
case 1326:
case 268:
case 3273:
case 2328:
case 1427:
case 1510:
case 860:
case 341:
case 1996:
case 3805:
case 3839:
case 781:
case 1010:
case 1718:
case 3441:
case 2716:
case 806:
case 2923:
case 2284:
case 193:
case 3785:
case 2855:
case 1263:
case 2393:
case 856:
case 1299:
case 1735:
case 1709:
case 2369:
case 1312:
case 664:
case 3260:
case 315:
case 1497:
case 1690:
case 2398:
case 2059:
case 1482:
case 4049:
case 3121:
case 2928:
case 3669:
case 2824:
case 3693:
case 458:
case 2792:
case 835:
case 408:
case 3432:
case 3846:
case 593:
case 2418:
case 3561:
case 707:
case 1317:
case 1870:
case 2651:
case 1615:
case 713:
case 73:
case 2383:
case 2704:
case 2294:
case 4074:
case 2636:
case 3873:
case 124:
case 1638:
case 962:
case 3437:
case 1054:
case 1829:
case 2207:
case 227:
case 901:
case 2797:
case 459:
case 812:
case 927:
case 3103:
case 1633:
case 3771:
case 251:
case 1386:
case 1487:
case 2667:
case 1739:
case 165:
case 2196:
case 3945:
case 769:
case 1977:
case 3789:
case 190:
case 2524:
case 99:
case 1271:
case 1011:
case 467:
case 29:
case 3665:
case 3367:
case 4045:
case 565:
case 2734:
case 2300:
case 2540:
case 3078:
case 4050:
case 2606:
case 981:
case 2186:
case 3218:
case 1529:
case 2662:
case 1285:
case 1854:
case 489:
case 3073:
case 1603:
case 3133:
case 3180:
case 3306:
case 1953:
case 3600:
case 3768:
case 1130:
case 3213:
case 1825:
case 2164:
case 2356:
case 504:
case 3560:
case 4006:
case 1358:
case 554:
case 482:
case 1778:
case 1599:
case 146:
case 4062:
case 2900:
case 2584:
case 3642:
case 1752:
case 1063:
case 2002:
case 1895:
case 1353:
case 3906:
case 2066:
case 2841:
case 1681:
case 3350:
case 643:
case 1746:
case 2094:
case 3039:
case 276:
case 3005:
case 1810:
case 701:
case 762:
case 1757:
case 2837:
case 1225:
case 4014:
case 3261:
case 2126:
case 2965:
case 1443:
case 1128:
case 3967:
case 3120:
case 221:
case 1691:
case 957:
case 685:
case 470:
case 1123:
case 1448:
case 2507:
case 207:
case 93:
case 921:
case 3914:
case 2007:
case 864:
case 2028:
case 1877:
case 180:
case 2959:
case 2618:
case 1616:
case 1526:
case 3206:
case 498:
case 214:
case 656:
case 3313:
case 2609:
case 2436:
case 2635:
case 1194:
case 1438:
case 2337:
case 3430:
case 117:
case 635:
case 942:
case 3335:
case 3712:
case 2613:
case 2523:
case 3483:
case 3318:
case 572:
case 242:
case 2847:
case 1687:
case 580:
case 3641:
case 2715:
case 1751:
case 1954:
case 499:
case 3786:
case 1736:
case 644:
case 2738:
case 1604:
case 3498:
case 3267:
case 797:
case 1697:
case 2265:
case 1853:
case 2842:
case 553:
case 503:
case 3469:
case 172:
case 3493:
case 2780:
case 612:
case 3632:
case 2733:
case 2800:
case 3051:
case 22:
case 3143:
case 2088:
case 2129:
case 3551:
case 1971:
case 1140:
case 2932:
case 492:
case 92:
case 120:
case 3423:
case 179:
case 70:
case 1277:
case 3862:
case 2030:
case 948:
case 619:
case 2170:
case 302:
case 248:
case 1517:
case 1627:
case 3361:
case 1995:
case 361:
case 840:
case 737:
case 805:
case 3726:
case 3913:
case 855:
case 2242:
case 2474:
case 1096:
case 2098:
case 1910:
case 316:
case 1596:
case 2779:
case 2598:
case 2256:
case 1012:
case 1985:
case 373:
case 1258:
case 1444:
case 2111:
case 4013:
case 249:
case 579:
case 1622:
case 520:
case 660:
case 2593:
case 949:
case 2231:
case 441:
case 178:
case 3909:
case 3935:
case 695:
case 1272:
case 566:
case 3006:
case 626:
case 4060:
case 3640:
case 1750:
case 3447:
case 3506:
case 1226:
case 2830:
case 3373:
case 2228:
case 3562:
case 2966:
case 34:
case 3753:
case 78:
case 3127:
case 3352:
case 714:
case 3960:
case 3836:
case 3772:
case 1491:
case 2673:
case 1999:
case 1648:
case 123:
case 1963:
case 2500:
case 2984:
case 2445:
case 2000:
case 2781:
case 3851:
case 3567:
case 2893:
case 1311:
case 2450:
case 2657:
case 4005:
case 3067:
case 2775:
case 166:
case 3274:
case 2907:
case 1812:
case 3514:
case 2791:
case 2994:
case 3431:
case 3905:
case 329:
case 1989:
case 1481:
case 3122:
case 523:
case 3655:
case 1159:
case 388:
case 275:
case 748:
case 2047:
case 2307:
case 1767:
case 1408:
case 4057:
case 3251:
case 20:
case 2185:
case 1714:
case 2823:
case 1286:
case 975:
case 3116:
case 25:
case 2462:
case 2955:
case 2288:
case 2110:
case 322:
case 3187:
case 1077:
case 2283:
case 2394:
case 2828:
case 1826:
case 2230:
case 2924:
case 2467:
case 2298:
case 1296:
case 3550:
case 3973:
case 4078:
case 2195:
case 3050:
case 2302:
case 1762:
case 2719:
case 3684:
case 1970:
case 1053:
case 389:
case 4073:
case 1572:
case 2031:
case 2171:
case 2384:
case 1363:
case 2940:
case 3602:
case 1399:
case 1212:
case 2269:
case 534:
case 1929:
case 3465:
case 1373:
case 3226:
case 2742:
case 3643:
case 1562:
case 82:
case 3817:
case 3475:
case 2008:
case 2348:
case 1640:
case 2508:
case 1346:
case 182:
case 2756:
case 3886:
case 848:
case 1758:
case 2376:
case 2815:
case 669:
case 2670:
case 1378:
case 3329:
case 1960:
case 940:
case 2731:
case 2838:
case 128:
case 2934:
case 1014:
case 27:
case 54:
case 3812:
case 4089:
case 905:
case 2747:
case 3311:
case 205:
case 1274:
case 5:
case 366:
case 255:
case 404:
case 3481:
case 3989:
case 129:
case 3159:
case 3745:
case 2521:
case 2458:
case 610:
case 528:
case 394:
case 849:
case 1939:
case 3896:
case 936:
case 814:
case 1849:
case 2689:
case 2215:
case 1236:
case 264:
case 188:
case 2575:
case 3408:
case 3767:
case 465:
case 4011:
case 1607:
case 1545:
case 2765:
case 1339:
case 2113:
case 3826:
case 334:
case 842:
case 2879:
case 2280:
case 2233:
case 2591:
case 1187:
case 88:
case 1946:
case 3553:
case 4029:
case 2663:
case 3762:
case 2948:
case 189:
case 3053:
case 891:
case 3970:
case 3296:
case 1550:
case 2699:
case 785:
case 1050:
case 1973:
case 1197:
case 3212:
case 3399:
case 4070:
case 3058:
case 2081:
case 1952:
case 2668:
case 2290:
case 567:
case 2943:
case 3929:
case 1465:
case 3558:
case 1666:
case 1978:
case 1602:
case 651:
case 662:
case 522:
case 2208:
case 80:
case 1206:
case 2079:
case 2891:
case 2219:
case 1262:
case 1845:
case 2685:
case 1488:
case 875:
case 740:
case 3616:
case 3310:
case 837:
case 2520:
case 2417:
case 2610:
case 1318:
case 2875:
case 158:
case 2316:
case 3433:
case 2020:
case 3687:
case 2203:
case 2793:
case 1309:
case 317:
case 353:
case 2464:
case 2160:
case 2927:
case 225:
case 424:
case 681:
case 1074:
case 2695:
case 2881:
case 4025:
case 736:
case 1214:
case 3371:
case 925:
case 1786:
case 3954:
case 1850:
case 705:
case 508:
case 1717:
case 1632:
case 77:
case 109:
case 2783:
case 3853:
case 3697:
case 3925:
case 159:
case 2044:
case 1961:
case 2803:
case 1176:
case 3354:
case 516:
case 2178:
case 1036:
case 3971:
case 2538:
case 2275:
case 796:
case 3774:
case 1051:
case 2982:
case 1551:
case 3086:
case 2327:
case 2152:
case 1143:
case 1428:
case 2701:
case 3517:
case 764:
case 943:
case 3420:
case 1806:
case 2580:
case 2033:
case 4071:
case 152:
case 2808:
case 379:
case 320:
case 1148:
case 3064:
case 243:
case 2654:
case 3564:
case 897:
case 2322:
case 2157:
case 433:
case 2987:
case 1250:
case 41:
case 4085:
case 3253:
case 561:
case 3272:
case 1401:
case 4010:
case 378:
case 285:
case 1935:
case 3444:
case 3985:
case 985:
case 3622:
case 3749:
case 1918:
case 1659:
case 2281:
case 607:
case 2090:
case 3155:
case 956:
case 1945:
case 2463:
case 390:
case 1789:
case 3977:
case 771:
case 3295:
case 3705:
case 206:
case 3739:
case 2204:
case 1057:
case 2499:
case 256:
case 2991:
case 3198:
case 1190:
case 4077:
case 2707:
case 1367:
case 2297:
case 3511:
case 2468:
case 68:
case 277:
case 1466:
case 1665:
case 450:
case 3169:
case 977:
case 726:
case 3193:
case 1314:
case 935:
case 1402:
case 3188:
case 2043:
case 2216:
case 1552:
case 2784:
case 2543:
case 763:
case 3285:
case 2151:
case 3529:
case 3619:
case 2827:
case 1235:
case 574:
case 2576:
case 3972:
case 2136:
case 445:
case 3760:
case 2308:
case 3130:
case 801:
case 2766:
case 2548:
case 3825:
case 3570:
case 851:
case 2048:
case 1213:
case 3183:
case 2702:
case 1133:
case 1362:
case 2319:
case 3603:
case 1073:
case 4072:
case 1180:
case 2882:
case 3752:
case 62:
case 631:
case 2897:
case 3563:
case 1729:
case 3372:
case 1424:
case 3063:
case 3099:
case 2034:
case 1560:
case 3599:
case 1060:
case 3681:
case 3068:
case 2222:
case 423:
case 1144:
case 3746:
case 1455:
case 219:
case 1962:
case 648:
case 2672:
case 411:
case 2804:
case 3353:
case 1261:
case 2724:
case 1813:
case 2391:
case 3225:
case 2921:
case 3089:
case 16:
case 887:
case 1005:
case 3476:
case 354:
case 466:
case 1539:
case 1505:
case 2149:
case 3885:
case 3123:
case 868:
case 2375:
case 2677:
case 2470:
case 810:
case 1809:
case 3917:
case 226:
case 2933:
case 2150:
case 139:
case 3095:
case 1257:
case 1725:
case 3868:
case 3964:
case 1860:
case 271:
case 3571:
case 2938:
case 3899:
case 1601:
case 2834:
case 3986:
case 2582:
case 479:
case 3863:
case 2597:
case 1181:
case 3422:
case 1374:
case 1009:
case 1035:
case 1349:
case 3147:
case 1535:
case 539:
case 712:
case 3229:
case 3585:
case 2016:
case 1018:
case 2243:
case 1252:
case 697:
case 3912:
case 2516:
case 3085:
case 3620:
case 857:
case 1273:
case 2092:
case 3326:
case 2587:
case 3996:
case 2592:
case 4012:
case 1623:
case 3270:
case 83:
case 2248:
case 2379:
case 1246:
case 2920:
case 2167:
case 3312:
case 198:
case 3404:
case 1260:
case 2495:
case 4026:
case 60:
case 1949:
case 719:
case 65:
case 3263:
case 1785:
case 2114:
case 480:
case 1857:
case 2979:
case 2471:
case 286:
case 89:
case 986:
case 3268:
case 3497:
case 453:
case 3165:
case 2612:
case 3926:
case 2522:
case 2737:
case 1121:
case 1205:
case 1795:
case 3638:
case 324:
case 1108:
case 1873:
case 2106:
case 598:
case 1846:
case 2686:
case 3025:
case 2380:
case 1061:
case 199:
case 2162:
case 1119:
case 3317:
case 2617:
case 2527:
case 1974:
case 3633:
case 1103:
case 3680:
case 3386:
case 3054:
case 1630:
case 3100:
case 1852:
case 1683:
case 2843:
case 3554:
case 2664:
case 2754:
case 2181:
case 3988:
case 1082:
case 3158:
case 2374:
case 2459:
case 4030:
case 3172:
case 448:
case 171:
case 1938:
case 2601:
case 2936:
case 2725:
case 3541:
case 939:
case 3866:
case 1004:
case 3674:
case 3802:
case 1980:
case 1344:
case 2257:
case 3722:
case 3649:
case 941:
case 1454:
case 310:
case 163:
case 1379:
case 2246:
case 1087:
case 694:
case 1092:
case 1592:
case 241:
case 571:
case 3894:
case 830:
case 3807:
case 1016:
case 387:
case 2018:
case 2252:
case 747:
case 1990:
case 854:
case 1425:
case 238:
case 1626:
case 3461:
case 938:
case 2175:
case 2009:
case 2035:
case 3993:
case 1276:
case 2509:
case 2278:
case 3323:
case 526:
case 48:
case 3928:
case 3559:
case 1737:
case 3787:
case 1979:
case 1471:
case 2693:
case 2710:
case 2432:
case 2441:
case 915:
case 3716:
case 3855:
case 1114:
case 683:
case 998:
case 1234:
case 1167:
case 414:
case 298:
case 215:
case 1696:
case 1495:
case 3413:
case 2630:
case 3782:
case 2683:
case 1664:
case 3797:
case 3207:
case 586:
case 1410:
case 1527:
case 2974:
case 1315:
case 3388:
case 1027:
case 2771:
case 362:
case 351:
case 2846:
case 1686:
case 1485:
case 1944:
case 1380:
case 2061:
case 1741:
case 2119:
case 1333:
case 3418:
case 3294:
case 999:
case 3383:
case 3901:
case 2108:
case 645:
case 3330:
case 2873:
case 491:
case 3435:
case 3409:
case 3636:
case 739:
case 512:
case 3232:
case 792:
case 3947:
case 2402:
case 2190:
case 617:
case 135:
case 603:
case 1707:
case 3555:
case 1297:
case 177:
case 2466:
case 2665:
case 1282:
case 3112:
case 2557:
case 106:
case 4047:
case 1321:
case 1794:
case 3460:
case 2057:
case 3196:
case 1499:
case 274:
case 2484:
case 40:
case 974:
case 680:
case 1822:
case 3859:
case 1702:
case 1292:
case 672:
case 4031:
case 1287:
case 3117:
case 2573:
case 577:
case 0:
case 2546:
case 2600:
case 2407:
case 1548:
case 3164:
case 3237:
case 738:
case 2861:
case 1048:
case 2213:
case 2578:
case 2799:
case 2209:
case 3040:
case 3734:
case 1576:
case 2078:
case 506:
case 3606:
case 3540:
case 2138:
case 3300:
case 1076:
case 2052:
case 1043:
case 3186:
case 1489:
case 4042:
case 1543:
case 1151:
case 595:
case 3342:
case 1908:
case 3841:
case 3259:
case 679:
case 620:
case 560:
case 2144:
case 2656:
case 1411:
case 2455:
case 2350:
case 3566:
case 3748:
case 1174:
case 1903:
case 3356:
case 2060:
case 1534:
case 3832:
case 3776:
case 1381:
case 1882:
case 2642:
case 3743:
case 1897:
case 2729:
case 2967:
case 678:
case 2835:
case 1227:
case 1149:
case 3507:
case 3446:
case 1755:
case 3347:
case 732:
case 519:
case 3007:
case 1375:
case 1816:
case 2818:
case 160:
case 1470:
case 2005:
case 3094:
case 2179:
case 2440:
case 1887:
case 2647:
case 2345:
case 3594:
case 497:
case 2261:
case 2813:
case 1391:
case 3837:
case 3523:
case 2309:
case 2712:
case 2549:
case 2430:
case 74:
case 3200:
case 1520:
case 1610:
case 1316:
case 7:
case 1020:
case 834:
case 342:
case 850:
case 1219:
case 2845:
case 1685:
case 1392:
case 2488:
case 3028:
case 1387:
case 690:
case 3451:
case 3528:
case 3618:
case 3959:
case 1208:
case 1798:
case 2206:
case 665:
case 3337:
case 3436:
case 3609:
case 1891:
case 728:
case 1105:
case 1221:
case 1304:
case 259:
case 2469:
case 1044:
case 1730:
case 3168:
case 2493:
case 1671:
case 3501:
case 909:
case 3733:
case 451:
case 2632:
case 3332:
case 1881:
case 3856:
case 845:
case 1788:
case 3738:
case 1927:
case 2574:
case 2498:
case 2134:
case 2267:
case 2074:
case 1496:
case 391:
case 2148:
case 952:
case 1146:
case 3530:
case 3449:
case 3170:
case 811:
case 1654:
case 3030:
case 902:
case 2361:
case 1291:
case 788:
case 4032:
case 1533:
case 348:
case 585:
case 823:
case 1033:
case 261:
case 1982:
case 331:
case 3800:
case 1426:
case 1515:
case 2551:
case 3129:
case 1152:
case 2143:
case 2428:
case 3088:
case 1038:
case 1803:
case 2176:
case 3247:
case 2036:
case 1538:
case 543:
case 3256:
case 1723:
case 2659:
case 1281:
case 3593:
case 3720:
case 2401:
case 2935:
case 3093:
case 3937:
case 866:
case 1821:
case 3242:
case 654:
case 1322:
case 1157:
case 630:
case 3474:
case 1987:
case 604:
case 3779:
case 1992:
case 4002:
case 1343:
case 2127:
case 2352:
case 228:
case 1934:
case 2836:
case 1756:
case 3500:
case 3340:
case 1815:
case 3781:
case 2249:
case 3000:
case 1477:
case 3223:
case 2378:
case 758:
case 1833:
case 1008:
case 2506:
case 708:
case 1279:
case 1508:
case 282:
case 3228:
case 2373:
case 3830:
case 2062:
case 3652:
case 1742:
case 4084:
case 1161:
case 1519:
case 43:
case 421:
case 3201:
case 2905:
case 970:
case 540:
case 136:
case 270:
case 2777:
case 229:
case 407:
case 1521:
case 1458:
case 1244:
case 3565:
case 2357:
case 3657:
case 633:
case 3450:
case 476:
case 105:
case 4094:
case 3893:
case 2567:
case 2274:
case 3775:
case 155:
case 2067:
case 2014:
case 17:
case 2624:
case 2514:
case 759:
case 61:
case 2957:
case 222:
case 803:
case 1879:
case 1091:
case 967:
case 196:
case 4055:
case 2607:
case 267:
case 2545:
case 3283:
case 2305:
case 2339:
case 3047:
case 2236:
case 1575:
case 1238:
case 752:
case 1135:
case 761:
case 3547:
case 1109:
case 3406:
case 3605:
case 1075:
case 3307:
case 2694:
case 2251:
case 1215:
case 3185:
case 30:
case 3288:
case 3955:
case 3171:
case 3293:
case 3384:
case 3531:
case 3056:
case 1334:
case 872:
case 3556:
case 1081:
case 1668:
case 1290:
case 1943:
case 2465:
case 3366:
case 4040:
case 2550:
case 3708:
case 3801:
case 3195:
case 2104:
case 2946:
case 1844:
case 1663:
case 773:
case 3719:
case 3302:
case 289:
case 1888:
case 1340:
case 911:
case 2886:
case 3756:
case 1154:
case 340:
case 1223:
case 3477:
case 1000:
case 780:
case 3376:
case 1781:
case 3815:
case 2329:
case 3838:
case 3019:
case 703:
case 2226:
case 1830:
case 3519:
case 1966:
case 2864:
case 1883:
case 2968:
case 597:
case 3008:
case 3833:
case 639:
case 1678:
case 3279:
case 2750:
case 1902:
case 336:
case 2989:
case 2481:
case 3244:
case 3458:
case 2745:
case 3521:
case 1324:
case 3472:
case 294:
case 1791:
case 418:
case 873:
case 2896:
case 3890:
case 197:
case 3453:
case 638:
case 816:
case 1869:
case 1893:
case 305:
case 1355:
case 772:
case 355:
case 266:
case 858:
case 3765:
case 1283:
case 1721:
case 2577:
case 1828:
case 1230:
case 234:
case 1924:
case 3091:
case 900:
case 2217:
case 1185:
case 720:
case 1823:
case 15:
case 2419:
case 2911:
case 283:
case 3118:
case 175:
case 364:
case 3575:
case 698:
case 406:
case 983:
case 3820:
case 137:
case 615:
case 1639:
case 1406:
case 1605:
case 3135:
case 456:
case 2399:
case 2058:
case 1269:
case 2212:
case 2929:
case 4048:
case 3700:
case 3943:
case 3668:
case 2421:
case 3290:
case 1031:
case 1171:
case 1531:
case 2072:
case 1384:
case 412:
case 1302:
case 3948:
case 945:
case 3663:
case 2553:
case 3844:
case 1542:
case 2053:
case 1414:
case 537:
case 1708:
case 1467:
case 1660:
case 1298:
case 444:
case 2296:
case 2706:
case 245:
case 575:
case 2634:
case 778:
case 1195:
case 1801:
case 3875:
case 3316:
case 3520:
case 3610:
case 3793:
case 2692:
case 3203:
case 2480:
case 486:
case 217:
case 203:
case 822:
case 1613:
case 1523:
case 3464:
case 253:
case 1023:
case 3579:
case 3208:
case 3105:
case 711:
case 1635:
case 2194:
case 674:
case 3387:
case 2026:
case 3219:
case 2310:
case 2877:
case 2616:
case 2415:
case 1780:
case 1733:
case 4027:
case 3304:
case 3221:
case 1265:
case 2853:
case 2395:
case 972:
case 3730:
case 3044:
case 3160:
case 1831:
case 3496:
case 2184:
case 1163:
case 3881:
case 3788:
case 2371:
case 471:
case 3533:
case 3291:
case 3701:
case 2995:
case 3033:
case 2017:
case 979:
case 3173:
case 1530:
case 3146:
case 220:
case 279:
case 2277:
case 2564:
case 1030:
case 783:
case 1744:
case 343:
case 426:
case 2971:
case 3803:
case 84:
case 2774:
case 3275:
case 8:
case 1800:
case 3982:
case 3015:
case 2586:
case 1088:
case 1661:
case 3327:
case 882:
case 1129:
case 3426:
case 3625:
case 1593:
case 4092:
case 870:
case 4087:
case 1720:
case 978:
case 2012:
case 1069:
case 3281:
case 2155:
case 3090:
case 2749:
case 2512:
case 3723:
case 463:
case 1359:
case 2596:
case 1779:
case 3987:
case 52:
case 66:
case 3821:
case 2011:
case 335:
case 3282:
case 3297:
case 2621:
case 4091:
case 3975:
case 658:
case 1232:
case 2271:
case 1947:
case 965:
case 1024:
case 2977:
case 1241:
case 1859:
case 290:
case 815:
case 464:
case 990:
case 1667:
case 2705:
case 306:
case 2739:
case 2434:
case 3499:
case 356:
case 3766:
case 59:
case 2953:
case 1942:
case 2130:
case 3308:
case 3048:
case 2183:
case 2570:
case 659:
case 2825:
case 3287:
case 3292:
case 2603:
case 733:
case 2029:
case 3489:
case 1186:
case 2188:
case 2958:
case 2619:
case 3151:
case 2854:
case 3784:
case 3543:
case 1956:
case 1040:
case 3827:
case 3076:
case 1931:
case 2760:
case 3136:
case 1540:
case 1405:
case 1439:
case 1066:
case 3222:
case 1259:
case 1841:
case 2068:
case 507:
case 1566:
case 319:
case 793:
case 440:
case 2568:
case 3411:
case 2773:
case 602:
case 1002:
case 3908:
case 2895:
case 2101:
case 661:
case 521:
case 652:
case 3804:
case 53:
case 4003:
case 3897:
case 839:
case 1900:
case 1331:
case 1084:
case 4008:
case 1457:
case 1650:
case 3174:
case 1776:
case 1832:
case 3381:
case 3534:
case 576:
case 2778:
case 1347:
case 2448:
case 2254:
case 1446:
case 3755:
case 1645:
case 4021:
case 3149:
case 113:
case 3470:
case 360:
case 107:
case 3816:
case 318:
case 13:
case 1473:
case 724:
case 2691:
case 904:
case 47:
case 1965:
case 1452:
case 3921:
case 2443:
case 930:
case 1094:
case 2476:
case 455:
case 1594:
case 204:
case 3892:
case 371:
case 2571:
case 1032:
case 568:
case 628:
case 4033:
case 2131:
case 1727:
case 3938:
case 1255:
case 3597:
case 2644:
case 1158:
case 790:
case 443:
case 3915:
case 3082:
case 169:
case 326:
case 6:
case 4038:
case 2917:
case 3004:
case 3504:
case 682:
case 1930:
case 4015:
case 1541:
case 1866:
case 1983:
case 587:
case 1328:
case 2620:
case 3087:
case 2510:
case 2996:
case 3587:
case 2010:
case 3759:
case 2889:
case 1649:
case 569:
case 1722:
case 2270:
case 670:
case 984:
case 4090:
case 363:
case 1177:
case 3248:
case 110:
case 1240:
case 91:
case 3276:
case 3990:
case 187:
case 2229:
case 2085:
case 2912:
case 3425:
case 3626:
case 551:
case 562:
case 1792:
case 622:
case 3979:
case 1787:
case 501:
case 4020:
case 386:
case 2268:
case 527:
case 2497:
case 2690:
case 1059:
case 3022:
case 2396:
case 1266:
case 1928:
case 3612:
case 2165:
case 1824:
case 2299:
case 2735:
case 2312:
case 3920:
case 688:
case 2404:
case 1716:
case 1923:
case 874:
case 2811:
case 1855:
case 2263:
case 1393:
case 3876:
case 3732:
case 2633:
case 730:
case 754:
case 847:
case 162:
case 2492:
case 2386:
case 704:
case 1840:
case 2487:
case 3338:
case 1413:
case 2829:
case 1207:
case 127:
case 4044:
case 1383:
case 1704:
case 425:
case 1636:
case 224:
case 2638:
case 3848:
case 3686:
case 3485:
case 1418:
case 2870:
case 3333:
case 3162:
case 2289:
case 1651:
case 2615:
case 2416:
case 2525:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751266801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,];
var gg_b = "1751266801/";

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
