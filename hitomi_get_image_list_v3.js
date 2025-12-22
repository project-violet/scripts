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
case 2556:
case 4071:
case 664:
case 1406:
case 805:
case 3743:
case 362:
case 4015:
case 595:
case 78:
case 1139:
case 3581:
case 787:
case 1248:
case 1002:
case 3417:
case 2900:
case 152:
case 561:
case 3015:
case 462:
case 2907:
case 432:
case 2887:
case 3494:
case 1381:
case 471:
case 572:
case 3414:
case 479:
case 2461:
case 175:
case 1893:
case 3981:
case 3185:
case 2904:
case 3663:
case 676:
case 2795:
case 2884:
case 1872:
case 283:
case 3203:
case 3309:
case 555:
case 827:
case 2726:
case 218:
case 1147:
case 700:
case 2316:
case 2134:
case 4095:
case 1450:
case 2459:
case 2500:
case 3853:
case 942:
case 296:
case 2570:
case 1579:
case 2218:
case 2523:
case 1252:
case 3434:
case 281:
case 2388:
case 3159:
case 2843:
case 1766:
case 1089:
case 2190:
case 1199:
case 3787:
case 2336:
case 866:
case 3220:
case 1802:
case 3161:
case 2974:
case 2485:
case 3227:
case 3946:
case 3871:
case 758:
case 2122:
case 3815:
case 725:
case 4035:
case 3001:
case 3784:
case 1646:
case 4053:
case 373:
case 2977:
case 1205:
case 203:
case 2970:
case 1979:
case 2084:
case 2923:
case 3382:
case 1119:
case 2110:
case 1468:
case 780:
case 1231:
case 2753:
case 3437:
case 3053:
case 1855:
case 2298:
case 0:
case 3035:
case 1582:
case 1833:
case 533:
case 3861:
case 2338:
case 2814:
case 86:
case 2890:
case 529:
case 83:
case 3115:
case 343:
case 2897:
case 3911:
case 3484:
case 1391:
case 3975:
case 2964:
case 3209:
case 2822:
case 1691:
case 1044:
case 1776:
case 3651:
case 939:
case 443:
case 2037:
case 3351:
case 844:
case 1569:
case 2453:
case 2386:
case 2030:
case 2143:
case 297:
case 2686:
case 3591:
case 1932:
case 2435:
case 3859:
case 3511:
case 3575:
case 2564:
case 1047:
case 3734:
case 931:
case 2049:
case 1133:
case 3828:
case 2296:
case 4085:
case 961:
case 378:
case 972:
case 1951:
case 2942:
case 8:
case 1969:
case 2960:
case 1611:
case 1311:
case 478:
case 1883:
case 2817:
case 538:
case 568:
case 3195:
case 1675:
case 1903:
case 25:
case 2810:
case 2785:
case 422:
case 2894:
case 2967:
case 1281:
case 2180:
case 1189:
case 735:
case 2014:
case 3612:
case 3531:
case 1992:
case 2495:
case 646:
case 1605:
case 759:
case 3324:
case 1305:
case 2761:
case 145:
case 449:
case 1113:
case 1265:
case 933:
case 3282:
case 3790:
case 963:
case 2929:
case 1512:
case 71:
case 2837:
case 1844:
case 2558:
case 2759:
case 1750:
case 786:
case 1757:
case 4061:
case 1524:
case 3505:
case 2698:
case 3059:
case 3952:
case 1839:
case 799:
case 2834:
case 1652:
case 288:
case 2641:
case 3153:
case 1754:
case 2288:
case 1527:
case 3135:
case 1592:
case 2849:
case 3931:
case 3710:
case 3885:
case 1193:
case 677:
case 3794:
case 1924:
case 4028:
case 2017:
case 751:
case 67:
case 2958:
case 1172:
case 3717:
case 2010:
case 1019:
case 3160:
case 1427:
case 3543:
case 2756:
case 351:
case 696:
case 1492:
case 3004:
case 2302:
case 195:
case 3056:
case 3781:
case 681:
case 2429:
case 1096:
case 1643:
case 1249:
case 2240:
case 161:
case 1908:
case 1888:
case 4056:
case 131:
case 552:
case 451:
case 1234:
case 3142:
case 741:
case 2926:
case 2247:
case 31:
case 749:
case 155:
case 240:
case 2355:
case 459:
case 386:
case 4000:
case 575:
case 169:
case 3608:
case 391:
case 435:
case 656:
case 2595:
case 689:
case 365:
case 491:
case 3000:
case 2707:
case 359:
case 2915:
case 1412:
case 2111:
case 2700:
case 1709:
case 2458:
case 486:
case 2175:
case 1763:
case 41:
case 3164:
case 1508:
case 234:
case 264:
case 2723:
case 2881:
case 1779:
case 2313:
case 1210:
case 2770:
case 3077:
case 410:
case 2777:
case 2389:
case 1680:
case 3070:
case 2689:
case 3411:
case 3984:
case 2464:
case 3856:
case 3475:
case 3678:
case 1198:
case 24:
case 3587:
case 310:
case 1896:
case 4070:
case 3366:
case 3580:
case 247:
case 3666:
case 4077:
case 2935:
case 1432:
case 3254:
case 2131:
case 3206:
case 778:
case 3250:
case 306:
case 2501:
case 1978:
case 2152:
case 1451:
case 3980:
case 163:
case 2553:
case 2460:
case 133:
case 2372:
case 3491:
case 882:
case 618:
case 1403:
case 1297:
case 2672:
case 2693:
case 2393:
case 2467:
case 406:
case 3987:
case 453:
case 3807:
case 1086:
case 4067:
case 1751:
case 2742:
case 246:
case 380:
case 3376:
case 2255:
case 3934:
case 3949:
case 3368:
case 3668:
case 650:
case 4060:
case 2344:
case 425:
case 1637:
case 2644:
case 3060:
case 4042:
case 1576:
case 773:
case 2091:
case 2805:
case 2474:
case 2985:
case 3446:
case 1125:
case 1703:
case 3156:
case 975:
case 1769:
case 3549:
case 812:
case 690:
case 3775:
case 3321:
case 2764:
case 3100:
case 3748:
case 407:
case 2048:
case 3107:
case 952:
case 2202:
case 2470:
case 1479:
case 2423:
case 3064:
case 2075:
case 2340:
case 1349:
case 30:
case 2640:
case 1649:
case 458:
case 1818:
case 307:
case 1976:
case 613:
case 2647:
case 27:
case 1334:
case 3650:
case 3522:
case 3350:
case 300:
case 545:
case 1954:
case 4058:
case 3590:
case 270:
case 2561:
case 3357:
case 1322:
case 1550:
case 3917:
case 1397:
case 3177:
case 1697:
case 2272:
case 400:
case 1614:
case 2407:
case 2399:
case 1690:
case 2699:
case 3058:
case 697:
case 1724:
case 3123:
case 487:
case 2729:
case 1720:
case 2619:
case 2961:
case 2528:
case 619:
case 2165:
case 1773:
case 2213:
case 2404:
case 2683:
case 2146:
case 2289:
case 1317:
case 2383:
case 3864:
case 1506:
case 2811:
case 1554:
case 771:
case 657:
case 1957:
case 732:
case 38:
case 3266:
case 1950:
case 2959:
case 387:
case 2052:
case 1041:
case 1018:
case 65:
case 3606:
case 142:
case 2154:
case 3231:
case 2106:
case 1546:
case 2988:
case 1565:
case 3833:
case 4093:
case 1128:
case 1035:
case 900:
case 266:
case 3476:
case 1430:
case 3855:
case 729:
case 1826:
case 1053:
case 1212:
case 2772:
case 1001:
case 2258:
case 3346:
case 2374:
case 3365:
case 3119:
case 1382:
case 506:
case 3665:
case 3205:
case 1224:
case 3982:
case 1965:
case 274:
case 1161:
case 1220:
case 2323:
case 2229:
case 1679:
case 3089:
case 1815:
case 2377:
case 2789:
case 889:
case 510:
case 1871:
case 1227:
case 3252:
case 593:
case 2447:
case 803:
case 987:
case 3579:
case 2066:
case 148:
case 916:
case 3766:
case 2045:
case 2078:
case 768:
case 98:
case 2733:
case 3457:
case 2242:
case 2008:
case 1251:
case 2996:
case 565:
case 3055:
case 3140:
case 3033:
case 1801:
case 517:
case 3893:
case 4033:
case 1414:
case 801:
case 2499:
case 723:
case 4055:
case 1490:
case 2307:
case 3291:
case 925:
case 1497:
case 1203:
case 1309:
case 51:
case 1269:
case 205:
case 586:
case 2260:
case 1422:
case 1663:
case 654:
case 958:
case 2483:
case 2356:
case 2304:
case 809:
case 682:
case 1410:
case 2419:
case 1494:
case 1232:
case 3144:
case 162:
case 3406:
case 484:
case 2525:
case 2168:
case 227:
case 742:
case 4002:
case 1581:
case 2878:
case 22:
case 551:
case 2176:
case 2845:
case 2518:
case 1620:
case 993:
case 1552:
case 2541:
case 3083:
case 2402:
case 1905:
case 1885:
case 587:
case 1692:
case 2821:
case 516:
case 1327:
case 3520:
case 761:
case 3847:
case 850:
case 2998:
case 141:
case 3592:
case 1135:
case 728:
case 3754:
case 3331:
case 3631:
case 813:
case 3408:
case 755:
case 3844:
case 3512:
case 2145:
case 260:
case 2918:
case 230:
case 953:
case 2455:
case 1952:
case 2050:
case 1531:
case 1612:
case 3927:
case 3246:
case 2358:
case 2658:
case 3099:
case 1312:
case 3920:
case 1790:
case 1282:
case 2274:
case 3113:
case 345:
case 890:
case 612:
case 500:
case 3903:
case 2664:
case 3675:
case 3062:
case 507:
case 3532:
case 4040:
case 2364:
case 3648:
case 3311:
case 3611:
case 3348:
case 2256:
case 2489:
case 811:
case 3281:
case 50:
case 2413:
case 2021:
case 215:
case 951:
case 3819:
case 2762:
case 1632:
case 2740:
case 1749:
case 558:
case 237:
case 2806:
case 1548:
case 3466:
case 2854:
case 2986:
case 3951:
case 178:
case 2747:
case 3478:
case 85:
case 2342:
case 2642:
case 2739:
case 917:
case 2538:
case 2857:
case 91:
case 2850:
case 1859:
case 1591:
case 986:
case 3551:
case 959:
case 2367:
case 2493:
case 2207:
case 3102:
case 1861:
case 2:
case 763:
case 3691:
case 965:
case 1171:
case 819:
case 1603:
case 1975:
case 1484:
case 3391:
case 1911:
case 1669:
case 2360:
case 1948:
case 4044:
case 1115:
case 1746:
case 1074:
case 3384:
case 333:
case 2809:
case 3469:
case 363:
case 2989:
case 1129:
case 2120:
case 1987:
case 2913:
case 2601:
case 2173:
case 2635:
case 153:
case 2653:
case 2353:
case 106:
case 2486:
case 433:
case 949:
case 3451:
case 864:
case 3141:
case 463:
case 3816:
case 3896:
case 1645:
case 2513:
case 3198:
case 941:
case 254:
case 1666:
case 2589:
case 1366:
case 1077:
case 3545:
case 627:
case 3294:
case 3779:
case 2993:
case 876:
case 2972:
case 1984:
case 1158:
case 3036:
case 3217:
case 2112:
case 1448:
case 469:
case 2555:
case 943:
case 439:
case 2009:
case 1000:
case 4016:
case 2533:
case 455:
case 666:
case 1164:
case 3763:
case 3709:
case 186:
case 2326:
case 355:
case 11:
case 1431:
case 191:
case 1608:
case 2132:
case 685:
case 117:
case 1943:
case 1268:
case 369:
case 331:
case 3888:
case 3908:
case 3343:
case 3643:
case 674:
case 1142:
case 1452:
case 3234:
case 922:
case 2502:
case 2371:
case 1543:
case 1221:
case 1160:
case 2315:
case 2169:
case 3420:
case 2285:
case 1781:
case 395:
case 1056:
case 1823:
case 532:
case 3473:
case 1004:
case 1510:
case 2328:
case 1752:
case 1278:
case 2496:
case 342:
case 1354:
case 3018:
case 1606:
case 615:
case 3950:
case 2832:
case 2583:
case 1517:
case 3773:
case 3310:
case 2092:
case 870:
case 1481:
case 637:
case 3610:
case 442:
case 541:
case 1914:
case 3720:
case 1990:
case 3554:
case 1997:
case 3317:
case 2073:
case 3617:
case 1922:
case 2425:
case 3697:
case 3712:
case 3284:
case 775:
case 2024:
case 2983:
case 3622:
case 3322:
case 3557:
case 2661:
case 1910:
case 2919:
case 1123:
case 1705:
case 3724:
case 3838:
case 549:
case 2179:
case 2201:
case 1170:
case 3136:
case 1867:
case 3690:
case 2012:
case 3390:
case 3614:
case 3906:
case 1350:
case 2253:
case 1522:
case 3188:
case 1731:
case 1357:
case 423:
case 2599:
case 2944:
case 3732:
case 3649:
case 3243:
case 3968:
case 10:
case 3334:
case 971:
case 2562:
case 3634:
case 3841:
case 2939:
case 107:
case 3976:
case 962:
case 932:
case 1748:
case 438:
case 2827:
case 1321:
case 1775:
case 1549:
case 2540:
case 1621:
case 2873:
case 1534:
case 846:
case 2685:
case 2547:
case 3479:
case 2820:
case 158:
case 1829:
case 1107:
case 421:
case 3482:
case 2003:
case 429:
case 2539:
case 3576:
case 125:
case 1060:
case 2812:
case 3769:
case 4086:
case 630:
case 3038:
case 1156:
case 3703:
case 1104:
case 660:
case 3898:
case 1934:
case 2947:
case 3330:
case 180:
case 3196:
case 1676:
case 3086:
case 198:
case 1042:
case 2786:
case 2051:
case 3637:
case 1668:
case 2940:
case 2026:
case 2835:
case 770:
case 1242:
case 3134:
case 3726:
case 912:
case 418:
case 2497:
case 2309:
case 1600:
case 3795:
case 1925:
case 3904:
case 2422:
case 105:
case 2363:
case 1260:
case 3956:
case 3884:
case 3461:
case 2801:
case 1516:
case 1267:
case 3238:
case 1499:
case 2414:
case 2494:
case 2071:
case 1419:
case 1596:
case 3887:
case 3900:
case 4043:
case 3880:
case 1304:
case 3325:
case 3771:
case 502:
case 1356:
case 401:
case 1878:
case 693:
case 3396:
case 1845:
case 3043:
case 3130:
case 1176:
case 3696:
case 875:
case 262:
case 2743:
case 1866:
case 2232:
case 3137:
case 3504:
case 1168:
case 271:
case 2035:
case 2565:
case 659:
case 120:
case 2826:
case 136:
case 166:
case 2430:
case 3298:
case 456:
case 635:
case 1444:
case 594:
case 2437:
case 665:
case 1154:
case 3753:
case 3735:
case 1808:
case 185:
case 3923:
case 3084:
case 1374:
case 3970:
case 489:
case 2001:
case 686:
case 2212:
case 2784:
case 3117:
case 3087:
case 554:
case 1789:
case 1377:
case 1588:
case 2227:
case 2220:
case 1323:
case 582:
case 1229:
case 481:
case 1623:
case 174:
case 3974:
case 699:
case 1713:
case 2379:
case 1370:
case 3843:
case 77:
case 1045:
case 3388:
case 3688:
case 1150:
case 1447:
case 777:
case 1157:
case 2434:
case 4087:
case 651:
case 396:
case 248:
case 3570:
case 1536:
case 419:
case 2487:
case 408:
case 3810:
case 144:
case 1762:
case 35:
case 4034:
case 687:
case 115:
case 1364:
case 4049:
case 1664:
case 616:
case 68:
case 734:
case 1256:
case 1489:
case 2480:
case 357:
case 1204:
case 457:
case 3942:
case 278:
case 2828:
case 3049:
case 3296:
case 222:
case 45:
case 2632:
case 2749:
case 319:
case 1986:
case 902:
case 167:
case 137:
case 1806:
case 1850:
case 2859:
case 2591:
case 3453:
case 1744:
case 3143:
case 1739:
case 2730:
case 39:
case 1068:
case 1857:
case 1538:
case 49:
case 2603:
case 2975:
case 1472:
case 2484:
case 2171:
case 1200:
case 1586:
case 2263:
case 3897:
case 4037:
case 1660:
case 2669:
case 3814:
case 3401:
case 1:
case 411:
case 3338:
case 1207:
case 1783:
case 2717:
case 607:
case 3094:
case 3010:
case 3958:
case 2552:
case 1541:
case 2320:
case 1223:
case 2885:
case 3236:
case 2373:
case 1719:
case 3017:
case 2673:
case 1402:
case 2028:
case 2931:
case 658:
case 241:
case 3849:
case 2153:
case 2443:
case 845:
case 413:
case 982:
case 388:
case 3529:
case 3728:
case 4094:
case 4010:
case 130:
case 1876:
case 4090:
case 1145:
case 1433:
case 1050:
case 1178:
case 2505:
case 740:
case 1057:
case 1166:
case 2282:
case 2714:
case 1598:
case 2624:
case 3022:
case 2324:
case 3761:
case 2531:
case 1658:
case 2312:
case 2797:
case 2612:
case 1695:
case 3175:
case 9:
case 259:
case 2007:
case 440:
case 831:
case 3458:
case 861:
case 1555:
case 828:
case 1009:
case 3707:
case 3526:
case 265:
case 2874:
case 3865:
case 2405:
case 1063:
case 2308:
case 291:
case 505:
case 286:
case 21:
case 3239:
case 1441:
case 1955:
case 2452:
case 1151:
case 102:
case 3926:
case 1796:
case 2142:
case 1502:
case 788:
case 3571:
case 299:
case 2870:
case 1879:
case 2004:
case 2056:
case 3302:
case 3756:
case 915:
case 1671:
case 869:
case 3191:
case 3995:
case 1103:
case 2877:
case 2160:
case 1169:
case 1315:
case 1615:
case 2987:
case 3467:
case 1120:
case 1261:
case 3693:
case 1301:
case 679:
case 3046:
case 194:
case 1601:
case 3299:
case 2491:
case 1863:
case 536:
case 3535:
case 3372:
case 566:
case 1192:
case 3065:
case 3460:
case 1989:
case 520:
case 711:
case 376:
case 4065:
case 1593:
case 797:
case 2584:
case 1572:
case 926:
case 2250:
case 1353:
case 79:
case 206:
case 960:
case 1486:
case 930:
case 434:
case 2254:
case 833:
case 863:
case 1589:
case 2645:
case 210:
case 2345:
case 719:
case 2678:
case 1972:
case 2475:
case 3464:
case 44:
case 2856:
case 2984:
case 3389:
case 1112:
case 2448:
case 2411:
case 2158:
case 1079:
case 3313:
case 3770:
case 1736:
case 447:
case 334:
case 3901:
case 757:
case 3881:
case 3723:
case 1032:
case 927:
case 3647:
case 37:
case 4048:
case 377:
case 92:
case 4011:
case 2937:
case 515:
case 3340:
case 796:
case 20:
case 4075:
case 3640:
case 3075:
case 1685:
case 2064:
case 3423:
case 3362:
case 537:
case 1820:
case 3202:
case 2107:
case 477:
case 1436:
case 3470:
case 2711:
case 829:
case 3477:
case 2748:
case 1892:
case 2549:
case 2621:
case 2321:
case 3764:
case 1215:
case 1163:
case 2858:
case 446:
case 3760:
case 2537:
case 821:
case 3181:
case 905:
case 1962:
case 2465:
case 1069:
case 225:
case 2060:
case 5:
case 1786:
case 112:
case 2208:
case 3644:
case 4091:
case 2949:
case 2368:
case 2668:
case 1226:
case 1947:
case 2934:
case 346:
case 2676:
case 298:
case 2376:
case 280:
case 3052:
case 287:
case 823:
case 2354:
case 701:
case 2606:
case 3959:
case 2594:
case 2245:
case 1628:
case 28:
case 2510:
case 1328:
case 2278:
case 1718:
case 1496:
case 216:
case 1020:
case 2029:
case 3146:
case 3404:
case 2922:
case 1425:
case 3875:
case 2864:
case 3456:
case 3289:
case 3619:
case 3319:
case 3213:
case 3528:
case 1999:
case 2990:
case 4052:
case 324:
case 2914:
case 2705:
case 783:
case 2910:
case 1919:
case 1201:
case 2058:
case 3699:
case 3758:
case 1869:
case 2860:
case 3272:
case 2177:
case 1024:
case 1983:
case 3891:
case 2917:
case 560:
case 3559:
case 3561:
case 643:
case 2357:
case 4005:
case 1416:
case 2842:
case 1599:
case 2590:
case 2514:
case 2597:
case 936:
case 718:
case 2522:
case 2731:
case 2350:
case 1253:
case 3150:
case 1688:
case 873:
case 1388:
case 564:
case 3045:
case 2766:
case 695:
case 2745:
case 2252:
case 1523:
case 628:
case 924:
case 3677:
case 4066:
case 661:
case 3713:
case 1114:
case 2089:
case 3670:
case 631:
case 374:
case 4078:
case 672:
case 3323:
case 2802:
case 103:
case 3936:
case 1970:
case 156:
case 1701:
case 848:
case 639:
case 1084:
case 3674:
case 2665:
case 2072:
case 3793:
case 385:
case 1194:
case 1117:
case 3258:
case 466:
case 655:
case 2855:
case 320:
case 712:
case 1574:
case 2833:
case 3808:
case 1735:
case 2468:
case 485:
case 1753:
case 3154:
case 2231:
case 3176:
case 1043:
case 1130:
case 3878:
case 1556:
case 3525:
case 1137:
case 2406:
case 1887:
case 1907:
case 2681:
case 2381:
case 427:
case 1625:
case 2248:
case 2002:
case 3483:
case 2211:
case 3656:
case 3304:
case 2889:
case 2275:
case 1900:
case 2872:
case 305:
case 3260:
case 3925:
case 540:
case 2291:
case 871:
case 3607:
case 3307:
case 3499:
case 2162:
case 2893:
case 2708:
case 1286:
case 2450:
case 1459:
case 292:
case 2055:
case 1507:
case 109:
case 1726:
case 2457:
case 1316:
case 1134:
case 405:
case 3733:
case 3242:
case 4057:
case 2305:
case 245:
case 2605:
case 3598:
case 3799:
case 2920:
case 1929:
case 1187:
case 3274:
case 1097:
case 460:
case 2927:
case 2099:
case 841:
case 3658:
case 430:
case 570:
case 4050:
case 1698:
case 326:
case 1398:
case 3433:
case 360:
case 2839:
case 3876:
case 2512:
case 3166:
case 1837:
case 3868:
case 2408:
case 2706:
case 2527:
case 2754:
case 2592:
case 94:
case 702:
case 2847:
case 3998:
case 2573:
case 1834:
case 188:
case 3054:
case 1618:
case 190:
case 2352:
case 4054:
case 1958:
case 113:
case 4006:
case 1415:
case 934:
case 638:
case 3821:
case 2172:
case 3277:
case 3783:
case 2924:
case 3402:
case 1017:
case 3270:
case 1236:
case 2862:
case 3541:
case 3660:
case 1897:
case 3360:
case 1822:
case 3200:
case 2391:
case 3472:
case 4068:
case 2102:
case 3493:
case 1338:
case 878:
case 1401:
case 1542:
case 2551:
case 1143:
case 940:
case 2569:
case 1386:
case 111:
case 2768:
case 2932:
case 3850:
case 1435:
case 19:
case 3342:
case 1037:
case 2044:
case 1216:
case 3747:
case 36:
case 1049:
case 782:
case 1942:
case 2155:
case 3806:
case 3986:
case 367:
case 108:
case 2466:
case 119:
case 754:
case 3740:
case 1564:
case 3108:
case 3938:
case 315:
case 3021:
case 1810:
case 344:
case 577:
case 2819:
case 437:
case 467:
case 2311:
case 157:
case 3489:
case 2348:
case 3256:
case 2675:
case 3664:
case 43:
case 3364:
case 1817:
case 2883:
case 2680:
case 3079:
case 2036:
case 715:
case 744:
case 2217:
case 2380:
case 1777:
case 164:
case 3124:
case 1723:
case 2578:
case 1901:
case 2294:
case 2687:
case 2779:
case 2210:
case 482:
case 76:
case 1953:
case 988:
case 3788:
case 1935:
case 2088:
case 354:
case 4079:
case 3593:
case 2978:
case 4082:
case 1501:
case 2816:
case 176:
case 1442:
case 2118:
case 2945:
case 2141:
case 1152:
case 3653:
case 675:
case 3486:
case 3353:
case 3635:
case 556:
case 3572:
case 3335:
case 3438:
case 589:
case 2290:
case 1393:
case 3601:
case 1046:
case 2214:
case 394:
case 3173:
case 1693:
case 3120:
case 3913:
case 2222:
case 950:
case 233:
case 3127:
case 3989:
case 7:
case 2469:
case 1460:
case 1065:
case 2684:
case 2297:
case 1672:
case 2384:
case 1302:
case 2473:
case 2420:
case 1429:
case 957:
case 2836:
case 3285:
case 1704:
case 817:
case 1081:
case 1756:
case 228:
case 3502:
case 3933:
case 1926:
case 3151:
case 835:
case 2249:
case 2343:
case 1515:
case 272:
case 859:
case 231:
case 261:
case 2908:
case 269:
case 726:
case 851:
case 4009:
case 239:
case 2016:
case 1595:
case 2237:
case 255:
case 1333:
case 2230:
case 583:
case 1239:
case 3716:
case 911:
case 3326:
case 1655:
case 140:
case 3626:
case 1355:
case 2709:
case 1846:
case 3395:
case 1971:
case 1175:
case 2508:
case 3695:
case 2424:
case 1865:
case 3533:
case 3851:
case 3599:
case 989:
case 3798:
case 1928:
case 1031:
case 1561:
case 2188:
case 2906:
case 2690:
case 1699:
case 2136:
case 705:
case 2314:
case 3179:
case 2614:
case 2390:
case 816:
case 2838:
case 2724:
case 3361:
case 2550:
case 2463:
case 2622:
case 1891:
case 2284:
case 1272:
case 2697:
case 2712:
case 2409:
case 1400:
case 903:
case 2280:
case 800:
case 1875:
case 3425:
case 2792:
case 3073:
case 1683:
case 2554:
case 2506:
case 1811:
case 3999:
case 1528:
case 1319:
case 2287:
case 1213:
case 2610:
case 3583:
case 2950:
case 1959:
case 72:
case 996:
case 3741:
case 4020:
case 3496:
case 2957:
case 981:
case 513:
case 3628:
case 4073:
case 229:
case 766:
case 736:
case 3940:
case 918:
case 312:
case 720:
case 614:
case 4069:
case 645:
case 1339:
case 1233:
case 2196:
case 1255:
case 2898:
case 3947:
case 2921:
case 2038:
case 1760:
case 785:
case 59:
case 3544:
case 3069:
case 1474:
case 3738:
case 807:
case 3824:
case 1805:
case 2479:
case 3436:
case 1048:
case 3820:
case 1202:
case 3385:
case 898:
case 1362:
case 1662:
case 1423:
case 508:
case 519:
case 1075:
case 3685:
case 3215:
case 4032:
case 774:
case 1477:
case 3109:
case 268:
case 2976:
case 1852:
case 3939:
case 2818:
case 825:
case 1647:
case 17:
case 3562:
case 2116:
case 557:
case 2334:
case 3032:
case 2521:
case 3488:
case 901:
case 2968:
case 221:
case 177:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1766372401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,];
var gg_b = "1766372401/";

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
