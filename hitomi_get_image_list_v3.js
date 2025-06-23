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
case 402:
case 2905:
case 2840:
case 139:
case 1362:
case 1576:
case 1621:
case 3130:
case 2730:
case 3861:
case 1546:
case 786:
case 2619:
case 1389:
case 2121:
case 3721:
case 2353:
case 2253:
case 1289:
case 2210:
case 3974:
case 1038:
case 3202:
case 2561:
case 2409:
case 1254:
case 719:
case 3686:
case 129:
case 1136:
case 3458:
case 1786:
case 1928:
case 2902:
case 1398:
case 2244:
case 24:
case 3953:
case 1423:
case 3910:
case 617:
case 438:
case 2567:
case 2274:
case 4028:
case 688:
case 3514:
case 807:
case 1243:
case 896:
case 1273:
case 911:
case 1916:
case 938:
case 1343:
case 2556:
case 3494:
case 1850:
case 2127:
case 1435:
case 753:
case 1923:
case 4032:
case 181:
case 1606:
case 520:
case 1269:
case 2402:
case 3084:
case 2034:
case 3209:
case 2890:
case 1826:
case 137:
case 2008:
case 2258:
case 846:
case 134:
case 3666:
case 1033:
case 2612:
case 2741:
case 871:
case 124:
case 1700:
case 2771:
case 717:
case 833:
case 1025:
case 127:
case 3600:
case 3171:
case 3309:
case 1112:
case 3881:
case 1757:
case 788:
case 1369:
case 3820:
case 3994:
case 3760:
case 142:
case 936:
case 3147:
case 3324:
case 809:
case 3177:
case 33:
case 200:
case 3651:
case 3444:
case 3537:
case 1278:
case 2615:
case 235:
case 1115:
case 32:
case 1022:
case 2394:
case 1428:
case 1932:
case 3958:
case 943:
case 686:
case 2909:
case 672:
case 898:
case 1393:
case 2107:
case 99:
case 1597:
case 1114:
case 3445:
case 3992:
case 2150:
case 3713:
case 3750:
case 396:
case 1613:
case 1650:
case 304:
case 2383:
case 3333:
case 49:
case 1417:
case 594:
case 3082:
case 1403:
case 4008:
case 845:
case 1756:
case 3488:
case 2438:
case 3949:
case 236:
case 1411:
case 2776:
case 3472:
case 3983:
case 2429:
case 3146:
case 3442:
case 685:
case 3222:
case 3048:
case 3968:
case 1934:
case 3886:
case 2279:
case 65:
case 3499:
case 2379:
case 2035:
case 1591:
case 3701:
case 2101:
case 2586:
case 3536:
case 425:
case 2292:
case 1821:
case 400:
case 1761:
case 3093:
case 2551:
case 508:
case 1911:
case 2263:
case 1408:
case 3054:
case 3972:
case 4003:
case 2815:
case 3062:
case 1434:
case 666:
case 1547:
case 2345:
case 83:
case 1002:
case 3238:
case 1577:
case 2288:
case 4017:
case 1264:
case 3495:
case 2375:
case 3089:
case 2039:
case 1618:
case 202:
case 3338:
case 2388:
case 2245:
case 3851:
case 1787:
case 2363:
case 75:
case 398:
case 3098:
case 2812:
case 3975:
case 532:
case 3620:
case 228:
case 1131:
case 3329:
case 323:
case 768:
case 2372:
case 1720:
case 3963:
case 211:
case 371:
case 547:
case 238:
case 333:
case 44:
case 2028:
case 1806:
case 161:
case 3726:
case 2500:
case 3988:
case 2422:
case 2126:
case 3449:
case 1541:
case 1903:
case 3512:
case 1626:
case 533:
case 1840:
case 2801:
case 344:
case 3216:
case 571:
case 239:
case 347:
case 2119:
case 1180:
case 2621:
case 2576:
case 3998:
case 3965:
case 3339:
case 322:
case 2389:
case 3630:
case 2546:
case 3088:
case 2038:
case 820:
case 3239:
case 3876:
case 1003:
case 1561:
case 3846:
case 3469:
case 229:
case 3063:
case 615:
case 1636:
case 2254:
case 546:
case 1409:
case 2262:
case 3943:
case 769:
case 3482:
case 3736:
case 2928:
case 2786:
case 523:
case 3691:
case 3478:
case 667:
case 940:
case 3550:
case 1274:
case 2939:
case 2365:
case 14:
case 2243:
case 3507:
case 3042:
case 3228:
case 598:
case 399:
case 1011:
case 3962:
case 509:
case 2373:
case 3328:
case 1556:
case 2343:
case 203:
case 2627:
case 292:
case 4005:
case 2813:
case 3485:
case 2435:
case 1127:
case 1344:
case 2298:
case 19:
case 2923:
case 1581:
case 3489:
case 3095:
case 990:
case 3068:
case 3978:
case 1034:
case 2596:
case 2269:
case 1402:
case 1008:
case 2826:
case 3454:
case 1924:
case 2033:
case 3083:
case 234:
case 548:
case 3232:
case 1358:
case 3332:
case 2382:
case 3526:
case 767:
case 3671:
case 224:
case 2416:
case 3641:
case 227:
case 3993:
case 3985:
case 351:
case 2660:
case 2757:
case 1747:
case 397:
case 2293:
case 3647:
case 3151:
case 1837:
case 125:
case 3323:
case 1294:
case 650:
case 3235:
case 2285:
case 2378:
case 100:
case 669:
case 1615:
case 3335:
case 1394:
case 2022:
case 2248:
case 77:
case 2115:
case 3049:
case 3982:
case 2393:
case 3473:
case 52:
case 2597:
case 1107:
case 621:
case 3334:
case 2384:
case 1150:
case 1383:
case 2359:
case 1032:
case 2417:
case 2259:
case 437:
case 618:
case 673:
case 3234:
case 1268:
case 1295:
case 4033:
case 3452:
case 53:
case 1922:
case 3156:
case 1776:
case 2024:
case 2411:
case 3646:
case 844:
case 2530:
case 1746:
case 3676:
case 1933:
case 847:
case 20:
case 1023:
case 3891:
case 595:
case 1836:
case 1279:
case 822:
case 2934:
case 3984:
case 330:
case 1101:
case 1670:
case 832:
case 1035:
case 3094:
case 3770:
case 305:
case 2880:
case 1819:
case 126:
case 2761:
case 716:
case 1925:
case 4038:
case 1551:
case 1433:
case 3459:
case 1815:
case 939:
case 2911:
case 2002:
case 3484:
case 2434:
case 3203:
case 4004:
case 3053:
case 3010:
case 1375:
case 2264:
case 545:
case 2577:
case 2252:
case 1388:
case 2364:
case 3847:
case 1275:
case 2618:
case 3303:
case 1245:
case 3877:
case 439:
case 1363:
case 3955:
case 2787:
case 3187:
case 193:
case 1637:
case 3317:
case 1812:
case 128:
case 3696:
case 773:
case 3731:
case 2781:
case 2005:
case 2255:
case 2720:
case 731:
case 111:
case 3211:
case 2355:
case 2806:
case 1242:
case 1904:
case 903:
case 138:
case 2541:
case 3790:
case 4029:
case 992:
case 851:
case 3964:
case 1500:
case 1938:
case 3952:
case 1399:
case 1690:
case 3044:
case 2903:
case 2415:
case 1090:
case 3644:
case 2026:
case 3674:
case 3883:
case 963:
case 695:
case 2128:
case 3728:
case 3986:
case 2743:
case 3868:
case 1834:
case 1031:
case 1105:
case 1397:
case 2605:
case 3096:
case 4027:
case 2568:
case 463:
case 2798:
case 3165:
case 62:
case 2579:
case 2116:
case 1037:
case 521:
case 2412:
case 3716:
case 2549:
case 955:
case 180:
case 2386:
case 3892:
case 1460:
case 212:
case 1927:
case 2018:
case 584:
case 1406:
case 3319:
case 1102:
case 3653:
case 2592:
case 3610:
case 3189:
case 587:
case 3739:
case 455:
case 1710:
case 3236:
case 3154:
case 3466:
case 3849:
case 866:
case 531:
case 2754:
case 1291:
case 1564:
case 3845:
case 1552:
case 3538:
case 410:
case 3957:
case 365:
case 2001:
case 1040:
case 2563:
case 1794:
case 1070:
case 3504:
case 3315:
case 2251:
case 175:
case 72:
case 2351:
case 3215:
case 3863:
case 3148:
case 2778:
case 3178:
case 1347:
case 3076:
case 3966:
case 1124:
case 85:
case 3888:
case 1803:
case 2575:
case 3842:
case 3169:
case 1555:
case 2769:
case 3872:
case 2915:
case 1811:
case 3182:
case 868:
case 2609:
case 3312:
case 1371:
case 1271:
case 277:
case 2013:
case 2366:
case 3212:
case 274:
case 2200:
case 3899:
case 2542:
case 589:
case 3951:
case 795:
case 3529:
case 388:
case 567:
case 2802:
case 564:
case 2361:
case 3853:
case 1276:
case 886:
case 872:
case 3956:
case 1015:
case 1749:
case 1907:
case 609:
case 160:
case 1816:
case 2914:
case 3240:
case 210:
case 1554:
case 96:
case 370:
case 4001:
case 182:
case 1376:
case 1913:
case 1950:
case 366:
case 1589:
case 3692:
case 748:
case 819:
case 2553:
case 477:
case 2805:
case 4050:
case 1901:
case 1418:
case 958:
case 1543:
case 57:
case 3214:
case 2625:
case 2574:
case 2267:
case 704:
case 2544:
case 3487:
case 483:
case 1012:
case 1125:
case 3071:
case 3708:
case 3874:
case 977:
case 2108:
case 3683:
case 1598:
case 1565:
case 3159:
case 974:
case 3844:
case 1133:
case 3505:
case 1795:
case 1634:
case 1768:
case 983:
case 3695:
case 623:
case 2006:
case 3390:
case 1582:
case 853:
case 2440:
case 3509:
case 3987:
case 368:
case 3155:
case 901:
case 3231:
case 2281:
case 113:
case 569:
case 723:
case 178:
case 817:
case 3672:
case 733:
case 3331:
case 2381:
case 4026:
case 1611:
case 3097:
case 3711:
case 771:
case 2111:
case 1396:
case 1772:
case 604:
case 888:
case 696:
case 607:
case 1763:
case 709:
case 1585:
case 1617:
case 28:
case 2604:
case 1823:
case 1104:
case 255:
case 2594:
case 2117:
case 3456:
case 1926:
case 2824:
case 912:
case 2990:
case 3703:
case 2103:
case 2638:
case 479:
case 1593:
case 956:
case 2080:
case 1019:
case 3030:
case 3675:
case 3524:
case 2021:
case 2414:
case 3467:
case 1548:
case 4018:
case 1578:
case 385:
case 1026:
case 2808:
case 799:
case 2628:
case 457:
case 1773:
case 101:
case 3991:
case 3643:
case 651:
case 3884:
case 978:
case 913:
case 2297:
case 1936:
case 1128:
case 2031:
case 1568:
case 2:
case 3534:
case 1605:
case 957:
case 3227:
case 2921:
case 1765:
case 413:
case 2559:
case 1825:
case 2037:
case 3087:
case 3471:
case 4019:
case 747:
case 1579:
case 280:
case 1549:
case 744:
case 2460:
case 889:
case 262:
case 3689:
case 1592:
case 2102:
case 3380:
case 4036:
case 1602:
case 2710:
case 606:
case 3153:
case 3110:
case 2753:
case 697:
case 3654:
case 816:
case 1286:
case 568:
case 350:
case 1762:
case 2552:
case 3693:
case 3503:
case 706:
case 3971:
case 1785:
case 482:
case 2960:
case 275:
case 315:
case 3194:
case 3517:
case 1748:
case 1351:
case 3678:
case 16:
case 1804:
case 2623:
case 1778:
case 2906:
case 441:
case 3648:
case 622:
case 2124:
case 2347:
case 1575:
case 2803:
case 887:
case 1829:
case 1357:
case 608:
case 884:
case 2811:
case 1915:
case 158:
case 2341:
case 1609:
case 566:
case 831:
case 1782:
case 3491:
case 1599:
case 749:
case 3709:
case 1266:
case 2109:
case 364:
case 3947:
case 177:
case 1050:
case 3977:
case 3260:
case 699:
case 2421:
case 3855:
case 1542:
case 2480:
case 3430:
case 1419:
case 1572:
case 514:
case 352:
case 2839:
case 1361:
case 241:
case 588:
case 3179:
case 730:
case 2015:
case 3862:
case 389:
case 2122:
case 1914:
case 553:
case 260:
case 705:
case 3201:
case 2554:
case 110:
case 2950:
case 276:
case 4040:
case 2913:
case 316:
case 1261:
case 869:
case 3496:
case 2376:
case 1431:
case 4070:
case 3539:
case 850:
case 2418:
case 2573:
case 1805:
case 1940:
case 1970:
case 3207:
case 2543:
case 1267:
case 1574:
case 1625:
case 3213:
case 3725:
case 2012:
case 1544:
case 2598:
case 3976:
case 3659:
case 1633:
case 3350:
case 3946:
case 1759:
case 3183:
case 2783:
case 2634:
case 3684:
case 3307:
case 1256:
case 3873:
case 565:
case 1784:
case 1134:
case 2768:
case 3843:
case 1558:
case 3532:
case 4031:
case 1470:
case 384:
case 1027:
case 2918:
case 2799:
case 3199:
case 2569:
case 163:
case 519:
case 278:
case 373:
case 318:
case 864:
case 3446:
case 2742:
case 4090:
case 3729:
case 867:
case 3172:
case 9:
case 321:
case 257:
case 1809:
case 2823:
case 18:
case 1604:
case 1387:
case 605:
case 2617:
case 3535:
case 3086:
case 1117:
case 2036:
case 3704:
case 155:
case 3878:
case 1990:
case 2603:
case 3188:
case 1764:
case 2138:
case 3738:
case 3664:
case 2593:
case 815:
case 3318:
case 87:
case 2745:
case 2019:
case 3893:
case 1414:
case 1021:
case 2407:
case 3175:
case 480:
case 2835:
case 2413:
case 2450:
case 462:
case 3996:
case 1287:
case 92:
case 1770:
case 581:
case 2322:
case 68:
case 1094:
case 655:
case 120:
case 3670:
case 3101:
case 710:
case 537:
case 3292:
case 1161:
case 326:
case 3925:
case 1455:
case 1830:
case 534:
case 1959:
case 1676:
case 2983:
case 1521:
case 3933:
case 2442:
case 3746:
case 524:
case 1580:
case 2472:
case 2176:
case 1984:
case 2078:
case 2968:
case 3279:
case 3836:
case 542:
case 1891:
case 2995:
case 3249:
case 3023:
case 93:
case 1208:
case 3283:
case 2233:
case 1058:
case 3438:
case 1452:
case 995:
case 2949:
case 3268:
case 1897:
case 84:
case 1334:
case 2707:
case 3107:
case 3395:
case 1167:
case 2992:
case 296:
case 3113:
case 2750:
case 207:
case 2229:
case 2073:
case 1211:
case 2963:
case 3272:
case 3557:
case 2512:
case 1044:
case 2479:
case 3399:
case 1074:
case 2726:
case 3422:
case 3812:
case 2065:
case 4055:
case 3299:
case 2098:
case 3566:
case 3372:
case 3631:
case 2681:
case 529:
case 1120:
case 1506:
case 2620:
case 328:
case 445:
case 1731:
case 3118:
case 302:
case 2338:
case 3388:
case 1317:
case 298:
case 393:
case 3637:
case 1187:
case 2851:
case 3425:
case 209:
case 78:
case 2054:
case 3551:
case 2483:
case 3929:
case 1217:
case 4052:
case 2942:
case 800:
case 3288:
case 3375:
case 1010:
case 3039:
case 2468:
case 1484:
case 3345:
case 4065:
case 971:
case 3814:
case 1493:
case 3127:
case 446:
case 3374:
case 245:
case 1989:
case 433:
case 2910:
case 677:
case 2953:
case 3274:
case 1448:
case 3567:
case 1513:
case 1550:
case 1478:
case 1954:
case 1072:
case 3424:
case 3011:
case 199:
case 701:
case 3797:
case 1228:
case 2514:
case 683:
case 923:
case 1507:
case 1469:
case 2944:
case 132:
case 3210:
case 1239:
case 2052:
case 1088:
case 2064:
case 1482:
case 826:
case 4089:
case 3409:
case 779:
case 2686:
case 1063:
case 147:
case 909:
case 1216:
case 3840:
case 3619:
case 1630:
case 2861:
case 3310:
case 3121:
case 1998:
case 3730:
case 1719:
case 3180:
case 2130:
case 3394:
case 2474:
case 1969:
case 1335:
case 2444:
case 2537:
case 3587:
case 3909:
case 2224:
case 612:
case 1982:
case 4048:
case 2958:
case 948:
case 656:
case 197:
case 1677:
case 106:
case 1498:
case 1235:
case 4093:
case 3294:
case 325:
case 1323:
case 23:
case 679:
case 777:
case 2171:
case 838:
case 1993:
case 2141:
case 774:
case 2590:
case 811:
case 1332:
case 295:
case 404:
case 2760:
case 1896:
case 1157:
case 3831:
case 496:
case 151:
case 2706:
case 3520:
case 3402:
case 1068:
case 1978:
case 3581:
case 2531:
case 1095:
case 4082:
case 1232:
case 3258:
case 2666:
case 904:
case 3890:
case 3924:
case 828:
case 4069:
case 3008:
case 907:
case 2094:
case 3170:
case 2770:
case 760:
case 4092:
case 497:
case 3140:
case 759:
case 3591:
case 406:
case 2455:
case 1093:
case 2161:
case 782:
case 148:
case 829:
case 1661:
case 3880:
case 2830:
case 1146:
case 839:
case 1983:
case 994:
case 1176:
case 1472:
case 3024:
case 3530:
case 1886:
case 230:
case 3934:
case 2984:
case 2891:
case 1048:
case 4068:
case 2527:
case 803:
case 2058:
case 1082:
case 3259:
case 4083:
case 1949:
case 2156:
case 2464:
case 3756:
case 1488:
case 951:
case 678:
case 892:
case 449:
case 1656:
case 2897:
case 500:
case 2234:
case 2334:
case 3114:
case 2714:
case 1475:
case 1707:
case 3827:
case 1333:
case 2167:
case 3650:
case 1225:
case 654:
case 196:
case 3806:
case 133:
case 2560:
case 1229:
case 1043:
case 171:
case 1073:
case 757:
case 3571:
case 2044:
case 3903:
case 1512:
case 3190:
case 754:
case 1988:
case 2074:
case 1726:
case 2871:
case 1945:
case 2506:
case 999:
case 2311:
case 2120:
case 1196:
case 1492:
case 123:
case 2696:
case 1329:
case 1620:
case 447:
case 3364:
case 54:
case 3618:
case 444:
case 2847:
case 1515:
case 1304:
case 422:
case 1687:
case 198:
case 4045:
case 1054:
case 1062:
case 947:
case 109:
case 4088:
case 432:
case 659:
case 1204:
case 676:
case 1495:
case 1089:
case 2053:
case 3252:
case 682:
case 3002:
case 2484:
case 2203:
case 3547:
case 1468:
case 303:
case 208:
case 3343:
case 3807:
case 3916:
case 3373:
case 2493:
case 2099:
case 2485:
case 3298:
case 392:
case 2448:
case 3365:
case 2478:
case 2513:
case 2697:
case 299:
case 1856:
case 2954:
case 1305:
case 4074:
case 1944:
case 1202:
case 2846:
case 2088:
case 1974:
case 3038:
case 232:
case 3289:
case 4053:
case 1570:
case 4010:
case 2186:
case 2691:
case 528:
case 3928:
case 2736:
case 3432:
case 3786:
case 1458:
case 1540:
case 2973:
case 329:
case 1686:
case 1191:
case 3262:
case 2316:
case 511:
case 247:
case 780:
case 222:
case 3389:
case 1861:
case 3546:
case 2630:
case 3680:
case 3119:
case 1130:
case 1780:
case 1302:
case 71:
case 2049:
case 2715:
case 3278:
case 1537:
case 3385:
case 2079:
case 0:
case 2473:
case 1224:
case 430:
case 3932:
case 662:
case 1177:
case 4094:
case 405:
case 1147:
case 3293:
case 297:
case 2235:
case 1651:
case 3378:
case 13:
case 1887:
case 2151:
case 3348:
case 3416:
case 536:
case 3025:
case 327:
case 1600:
case 2671:
case 2100:
case 3382:
case 2526:
case 324:
case 1760:
case 1820:
case 1994:
case 1881:
case 2157:
case 3757:
case 2978:
case 3596:
case 840:
case 6:
case 4058:
case 2948:
case 3606:
case 3439:
case 1410:
case 1453:
case 1531:
case 3923:
case 334:
case 2083:
case 3282:
case 543:
case 249:
case 337:
case 526:
case 1209:
case 1183:
case 2844:
case 3759:
case 914:
case 1946:
case 3367:
case 1350:
case 917:
case 1659:
case 3633:
case 3784:
case 1843:
case 3134:
case 3006:
case 3256:
case 1873:
case 575:
case 1684:
case 2668:
case 1207:
case 3970:
case 611:
case 3356:
case 417:
case 3805:
case 3940:
case 1057:
case 3544:
case 488:
case 2487:
case 1250:
case 2071:
case 1000:
case 3574:
case 801:
case 1898:
case 2240:
case 270:
case 310:
case 1201:
case 1051:
case 2077:
case 3553:
case 3431:
case 1539:
case 3510:
case 1496:
case 2420:
case 3261:
case 3361:
case 152:
case 2679:
case 189:
case 4046:
case 2956:
case 1854:
case 1862:
case 4076:
case 965:
case 2649:
case 1516:
case 1179:
case 693:
case 2340:
case 636:
case 3021:
case 2645:
case 86:
case 1893:
case 3414:
case 3287:
case 2237:
case 2894:
case 2920:
case 1885:
case 2467:
case 486:
case 793:
case 3931:
case 25:
case 1704:
case 1878:
case 1086:
case 2091:
case 1163:
case 1848:
case 38:
case 3604:
case 3387:
case 1318:
case 2703:
case 643:
case 3764:
case 2152:
case 986:
case 2456:
case 2164:
case 1738:
case 874:
case 3111:
case 3320:
case 2642:
case 2711:
case 3381:
case 877:
case 738:
case 2672:
case 1729:
case 2097:
case 883:
case 3809:
case 2290:
case 562:
case 184:
case 3470:
case 1532:
case 173:
case 2231:
case 363:
case 2461:
case 3755:
case 131:
case 2739:
case 1153:
case 3789:
case 2189:
case 3139:
case 3602:
case 1380:
case 4091:
case 1689:
case 985:
case 3754:
case 2162:
case 2154:
case 3762:
case 2466:
case 150:
case 379:
case 625:
case 2879:
case 3286:
case 169:
case 95:
case 3549:
case 2522:
case 4030:
case 3412:
case 1087:
case 3018:
case 554:
case 2892:
case 272:
case 3605:
case 69:
case 1534:
case 2096:
case 1705:
case 1477:
case 2451:
case 2533:
case 3583:
case 2198:
case 468:
case 1508:
case 3919:
case 1930:
case 2674:
case 2525:
case 3833:
case 1174:
case 3936:
case 2986:
case 1673:
case 3128:
case 2868:
case 2895:
case 968:
case 2173:
case 1991:
case 3773:
case 214:
case 2899:
case 3200:
case 377:
case 64:
case 3050:
case 1947:
case 2212:
case 383:
case 1511:
case 1430:
case 1306:
case 1260:
case 4041:
case 79:
case 1360:
case 2872:
case 1669:
case 560:
case 1206:
case 2842:
case 2169:
case 3357:
case 3829:
case 2312:
case 576:
case 1491:
case 3599:
case 2182:
case 3132:
case 863:
case 3300:
case 2486:
case 2732:
case 3436:
case 3782:
case 1648:
case 3804:
case 3778:
case 2148:
case 3748:
case 966:
case 2966:
case 1724:
case 2076:
case 3838:
case 2193:
case 855:
case 3912:
case 1941:
case 1693:
case 1685:
case 725:
case 115:
case 2315:
case 2957:
case 4047:
case 265:
case 3001:
case 2694:
case 2185:
case 3135:
case 4056:
case 3783:
case 3565:
case 2733:
case 2066:
case 964:
case 2976:
case 2350:
case 1874:
case 3768:
case 2843:
case 1184:
case 1695:
case 1734:
case 2195:
case 1668:
case 2307:
case 3795:
case 2684:
case 1314:
case 3543:
case 3418:
case 790:
case 56:
case 2725:
case 1961:
case 1071:
case 2898:
case 1041:
case 170:
case 3562:
case 4061:
case 359:
case 1240:
case 558:
case 2051:
case 3907:
case 1270:
case 1692:
case 3589:
case 1481:
case 1077:
case 3913:
case 1420:
case 1502:
case 3950:
case 1047:
case 382:
case 2192:
case 577:
case 1810:
case 3839:
case 3246:
case 47:
case 252:
case 70:
case 1370:
case 2854:
case 3749:
case 2722:
case 1679:
case 1340:
case 2179:
case 2516:
case 3407:
case 1675:
case 2145:
case 3019:
case 1920:
case 60:
case 3413:
case 950:
case 501:
case 1237:
case 185:
case 1981:
case 969:
case 2885:
case 2086:
case 1663:
case 3036:
case 1717:
case 2704:
case 1337:
case 3823:
case 3585:
case 3763:
case 1091:
case 875:
case 3593:
case 450:
case 2318:
case 3926:
case 1164:
case 2188:
case 1152:
case 3772:
case 3396:
case 2172:
case 1711:
case 690:
case 2142:
case 2729:
case 1672:
case 354:
case 1290:
case 357:
case 1509:
case 284:
case 3401:
case 556:
case 4020:
case 3799:
case 2326:
case 2532:
case 218:
case 273:
case 2655:
case 1155:
case 1461:
case 1987:
case 3753:
case 2110:
case 1739:
case 2153:
case 1653:
case 3639:
case 1319:
case 2380:
case 563:
case 3291:
case 729:
case 1466:
case 250:
case 1849:
case 2662:
case 882:
case 269:
case 1522:
case 380:
case 2441:
case 3616:
case 3037:
case 739:
case 2471:
case 1219:
case 3230:
case 3927:
case 172:
case 1892:
case 3584:
case 2534:
case 2447:
case 921:
case 2020:
case 3397:
case 487:
case 3105:
case 2705:
case 703:
case 3031:
case 473:
case 3559:
case 1165:
case 792:
case 2698:
case 3921:
case 637:
case 634:
case 2508:
case 1883:
case 2859:
case 2327:
case 984:
case 624:
case 421:
case 1525:
case 1674:
case 2174:
case 918:
case 1143:
case 2884:
case 973:
case 2673:
case 3297:
case 1728:
case 931:
case 642:
case 2643:
case 2977:
case 267:
case 3241:
case 1212:
case 4057:
case 3271:
case 117:
case 2306:
case 854:
case 2430:
case 2511:
case 1951:
case 1872:
case 4066:
case 3555:
case 510:
case 2682:
case 737:
case 878:
case 692:
case 1312:
case 3341:
case 3758:
case 2158:
case 1182:
case 3906:
case 3817:
case 1148:
case 31:
case 1215:
case 27:
case 3803:
case 2497:
case 2852:
case 916:
case 2864:
case 1076:
case 1966:
case 2971:
case 3564:
case 1538:
case 1845:
case 1900:
case 2941:
case 952:
case 1315:
case 629:
case 215:
case 375:
case 3960:
case 2194:
case 3635:
case 3794:
case 3427:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750672802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,];
var gg_b = "1750672802/";

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
